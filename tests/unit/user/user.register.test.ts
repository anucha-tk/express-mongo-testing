import { BadRequestError } from "@error/error";
import type { IUserDocument } from "src/models/User";
import type { UserRepository } from "src/repositories/user/user.repository";
import { UserService } from "src/services/user.service";

describe("UserService.register", () => {
	let userRepo: jest.Mocked<UserRepository>;
	let userService: UserService;

	beforeAll(() => {
		userRepo = {
			findByEmail: jest.fn(),
			create: jest.fn(),
		} as unknown as jest.Mocked<UserRepository>;

		userService = new UserService(userRepo);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("should create new user", async () => {
		const payload = { email: "example@gmail.com", password: "123456" };
		userRepo.findByEmail.mockResolvedValue(null);
		userRepo.create.mockResolvedValue({ ...payload } as IUserDocument);

		const result = await userService.register(payload);

		expect(userRepo.findByEmail).toHaveBeenCalledWith(payload.email);
		expect(userRepo.create).toHaveBeenCalledWith(payload);
		expect(result.email).toBe(payload.email);
	});

	test("should throw when not have email on body", async () => {
		const payload = {};

		await expect(userService.register(payload)).rejects.toThrow(
			BadRequestError,
		);
		await expect(userService.register(payload)).rejects.toThrow(
			"required email",
		);

		expect(userRepo.findByEmail).not.toHaveBeenCalled();
		expect(userRepo.create).not.toHaveBeenCalled();
	});

	test("should throw when email taken", async () => {
		const payload = { email: "example@gmail.com" };
		userRepo.findByEmail.mockResolvedValue({
			email: payload.email,
		} as IUserDocument);

		await expect(userService.register(payload)).rejects.toThrow(
			BadRequestError,
		);
		await expect(userService.register(payload)).rejects.toThrow(
			"User already exist",
		);

		expect(userRepo.create).not.toHaveBeenCalled();
	});
});

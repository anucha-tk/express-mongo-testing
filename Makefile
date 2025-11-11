dev:
	docker compose -f docker-compose.test.yml up -d
stop:
	docker compose -f docker-compose.test.yml stop
down:
	docker compose -f docker-compose.test.yml down
logs:
	docker compose -f docker-compose.test.yml logs
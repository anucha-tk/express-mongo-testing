#!/bin/bash
set -e

DB_NAME=${DB_NAME:-simple-db}
APP_DB_USER=${APP_DB_USER:-simple-db-user}
APP_DB_PWD=${APP_DB_PWD:-simple-user-pass}

mongosh <<EOF
use $DB_NAME;
db.createUser({
  user: "$APP_DB_USER",
  pwd: "$APP_DB_PWD",
  roles: [
    { role: "readWrite", db: "$DB_NAME" },
    { role: "userAdmin", db: "$DB_NAME" }
  ]
});
EOF

echo "App user created!"

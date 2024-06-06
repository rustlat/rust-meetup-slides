# 2. CRUD with _Poem_
<br>

```rust
#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "poem=debug");
    }
    tracing_subscriber::fmt::init();

    let api_service =
        OpenApiService::new(Api::default(), "Users", "1.0").server("http://localhost:3000/api");
    let ui = api_service.swagger_ui();

    Server::new(TcpListener::bind("0.0.0.0:3000"))
        .run(Route::new().nest("/api", api_service).nest("/", ui))
        .await
}
```

---

# 2. CRUD with _Poem_

```rust
#[derive(Default)]
struct Api {
    users: Mutex<Slab<User>>,
}

#[OpenApi]
impl Api {
    /// Create a new user
    #[oai(path = "/users", method = "post", tag = "ApiTags::User")]
    async fn create_user(&self, user: Json<User>) -> CreateUserResponse { ... }

    /// Find user by id
    #[oai(path = "/users/:user_id", method = "get", tag = "ApiTags::User")]
    async fn find_user(&self, user_id: Path<i64>) -> FindUserResponse { ... }

    /// Delete user by id
    #[oai(path = "/users/:user_id", method = "delete", tag = "ApiTags::User")]
    async fn delete_user(&self, user_id: Path<i64>) -> DeleteUserResponse { ... }

    /// Update user by id
    #[oai(path = "/users/:user_id", method = "put", tag = "ApiTags::User")]
    async fn put_user(&self, user_id: Path<i64>, update: Json<UpdateUser>) -> UpdateUserResponse { ... }
}
```

---

# 2. CRUD with _Poem_

Create & Read

```rust
// Create a new user
#[oai(path = "/users", method = "post", tag = "ApiTags::User")]
async fn create_user(&self, user: Json<User>) -> CreateUserResponse {
    let mut users = self.users.lock().await;
    let id = users.insert(user.0) as i64;
    CreateUserResponse::Ok(Json(id))
}

// Find user by id
#[oai(path = "/users/:user_id", method = "get", tag = "ApiTags::User")]
async fn find_user(&self, user_id: Path<i64>) -> FindUserResponse {
    let users = self.users.lock().await;
    match users.get(user_id.0 as usize) {
        Some(user) => FindUserResponse::Ok(Json(user.clone())),
        None => FindUserResponse::NotFound,
    }
}
```

---

# 2. CRUD with _Poem_

Delete

```rust

/// Delete user by id
#[oai(path = "/users/:user_id", method = "delete", tag = "ApiTags::User")]
async fn delete_user(&self, user_id: Path<i64>) -> DeleteUserResponse {
    let mut users = self.users.lock().await;
    let user_id = user_id.0 as usize;
    if users.contains(user_id) {
        users.remove(user_id);
        DeleteUserResponse::Ok
    } else {
        DeleteUserResponse::NotFound
    }
}
```

---

# 2. CRUD with _Poem_

Update

```rust

/// Update user by id
#[oai(path = "/users/:user_id", method = "put", tag = "ApiTags::User")]
async fn put_user(&self, user_id: Path<i64>, update: Json<UpdateUser>) -> UpdateUserResponse {
    let mut users = self.users.lock().await;
    match users.get_mut(user_id.0 as usize) {
        Some(user) => {
            if let Some(name) = update.0.name {
                user.name = name;
            }
            if let Some(password) = update.0.password {
                user.password = password;
            }
            UpdateUserResponse::Ok
        }
        None => UpdateUserResponse::NotFound,
    }
}
```

---

# 2. CRUD with _Poem_
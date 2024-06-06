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
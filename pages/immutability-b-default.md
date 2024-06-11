# Immutability by Default

Decide conscientemente cuando tus variables sean capaces de mutar

```rust {all|2|2,3|3|3-5}
fn main() {
    let p = Point {x: 3.0, y: 4.2};
    p.x = 13.0;
    // Error: cannot assign to `p.x`,
    // as `p` is not declared as mutable
}
```

<style>
h1 {
  color: #2B90B6;
  background-size: 100%;
}
</style>

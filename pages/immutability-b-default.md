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
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: Introducción a Rust
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

## Meetup: 
# Introducción a Rust

Descubre el poder de la programación segura y eficiente con Rust

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
src: ./pages/compiler-modern-devs.md
hide: false
---

---
src: ./pages/immutability-b-default.md
hide: false
---

---
layout: center
class: text-center
---

# Algebraic Typing

# Pattern Matching = Robustness

---

# Algebraic Typing

Problem
<div grid="~ cols-2 gap-2" m="t-2">
<img border="rounded" src="https://content.nroc.org/DevelopmentalMath/COURSE_TEXT2_RESOURCE/U13_L1_T1_text_final_4_files/image002.jpg" alt="">

<img border="rounded" src="asstets/particion_v1.svg" alt="">
</div>

---

# Structs and Traits

```rust
struct Point {
    x: f32,
    y: f32
}
    
trait Quadrant {
    fn get_quadrant(self) -> QuadrantNum;
}
```

---

# Enumerators, Structures

```rust
enum QuadrantNum {
    CENTER,
    I,
    II,
    III,
    IV
}
   
struct Point {
    x: f32,
    y: f32
}
```

---

### Implementing
<br>

```rust
impl Quadrant for Point {
    fn get_quadrant(self) -> quadrantnum {
        if self.x > 0.0 && self.y >= 0.0 {
            QuadrantNum::I
        } else if self.x <= 0.0 && self.y > 0.0 {
            QuadrantNum::II
				} else if self.x < 0.0 && self.y <= 0.0 {
            QuadrantNum::II
        } else if self.x >= 0.0 && self.y < 0.0 {
            QuadrantNum::IV
        } else {
            QuadrantNum::CENTER
        }
    }
}
```

---

# Pattern Matching = Robustness

match, if let pattern

```rust
impl Point {
    fn show_quad(self) {
        match self.get_quadrant() {
            QuadrantNum::I => println!("Quadrant I"),
            QuadrantNum::II => println!("Quadrant II"),
            QuadrantNum::III => println!("Quadrant III"),
            QuadrantNum::IV => println!("Quadrant IV"),
            QuadrantNum::CENTER => println!("It's the origin"),
        }
    }
}
```

---
layout: center
class: text-center
---

# Owning and Security
# (Ownership & Borrow Checking)

## **fighting the borrow checker**

---
layout: center
class: text-center
---

# Heap and Stack

---
src: ./pages/metaprogramming.md
hide: false
---

# Hands On

1. Hello World
2. CRUD with _Poem_
3. Embedded Programming
4. LLMs with Rust

---

# 1. Hello World
<br>

```rust
fn main() {
    println!("Hello, World!");
}
```

---
src: ./pages/hands-on/crud-poem.md
hide: false

---

# 3. Embedded Programming

---

# 4. LLMs with Rust
<br>

```rust
use auto_rust::llm_tool;
     
#[llm_tool]
// This function returns n^2 + 1 of a number
fn n_squared_plus_one(n: u64) -> u64 {
    todo!()
}
    
fn main() {
    let res = n_squared_plus_one(4);
    
    println!("{:?}", res);
}
```

---

# 4. LLMs with Rust
<br>

```bash
echo 'respuesta de auto-rust'
```
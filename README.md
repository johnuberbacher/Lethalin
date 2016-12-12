# Lethalin
Lethalin is the new solution for front-end web develpment. One framework that scales across all devices, Lethalin's boilerplate markup is fast, simple and easy to customize. With less than 500 lines of code, Lethalin is easy to maintain and expand on, making it the perfect framework to start a responsive project with.

Visit http://lethalin.com for more information and documentation.

## Get Lethalin
For stable release, download Lethalin directly from http://lethalin.com

Lethalin is also available in minified CSS


To clone directly from Github: `git clone https://github.com/johnuberbacher/Lethalin.git`

## Get Started
[Responsive Boilerplate](#Responsive)
[Navigation](#Navigation)
[Anchors & Buttons](#Anchors)


## Responsive Boilerplate
Lethalin's is designed around a 24 column based system. It was built to scale with mobile-design first. 
The syntax for creating responsive columns is simple:
```
<div class="grid">
  <div class="column">
    <div class="example-column">
      .column
    </div>
  </div>
</div>
```
The .grid class holds all the columns together. It has a default max-width of 1000px, which can be changed easily. Anything smaller than 1000px retains a responsive width and height.


The syntax for multiple columns is just as simple:
```
<div class="grid">
  <div class="column sm-12">
    <div class="example-column">
      .column .sm-12
    </div>
  </div>
  <div class="column sm-12">
    <div class="example-column">
      .column .sm-12
    </div>
  </div>
</div>
```


Lethalin uses 3 different sizes for responsive columns: .sm-#, .md-# and .lg-#
```
<div class="grid">
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
</div>
```


Multiple sized columns can also be stacked:
```
<div class="grid">
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <div class="column sm-12 md-6">
    <div class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
</div>
```


Also remember that when not supplying a .sm-# class, .column will treat itself as a 24-width column.
```
<div class="grid">
  <div class="column md-12">
    <div class="example-column">
      .column .md-12
    </div>
  </div>
  <div class="column md-12">
    <div class="example-column">
      .column .md-12
    </div>
  </div>
</div>
```


## Navigation
Navigation markdown is very simple
```
<header>
  <div class="grid">
    <a href="#" class="header">
      Website Logo
    </a>
    <div class="navbar">
      <a class="navbar-open"></a>
      <ul class="nav-expand">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#code">Code</a></li>
        <li><a href="#demo">Demos</a></li>
      </ul>
    </div>
  </div>
</header>
```
You can give your header the .sticky class to create a fixed header, just make sure to give your body a corresponding margin-top.
```
header class="sticky">
```


## Anchors and Buttons
Anchor Button's can be styled into buttons using the .button class
```
<a href="#" class="button">Anchor</a>
```

Turn inputs into buttons using the same .button class
```
<input type="submit" class="button" value="Submit">
```

Center a button with the .display-table utility class
```
<input type="submit" class="button display-table" value="Submit">
```

For full-width buttons, stack .button-wide after .button
```
<div class="grid">
  <div class="column md-12">
    <a class="button button-wide">.button .button-wide</a>
  </div>
  <div class="column md-12">
    <a class="button button-wide">.button .button-wide</a>
  </div>
</div>
```
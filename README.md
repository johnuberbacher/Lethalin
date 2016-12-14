# Lethalin
Lethalin is the new solution for front-end web develpment. One framework that scales across all devices, Lethalin's boilerplate markup is fast, simple and easy to customize. With less than 500 lines of code, Lethalin is easy to maintain and expand on, making it the perfect framework to start a responsive project with.

Visit http://lethalin.com for more information and documentation.

## Get Lethalin
For stable release, download Lethalin directly from http://lethalin.com

Lethalin is also available in minified CSS


To clone directly from Github: `git clone https://github.com/johnuberbacher/Lethalin.git`

## Get Started
[Responsive Boilerplate](#responsive-boilerplate)

[Navigation](#navigation)

[Anchors & Buttons](#anchors-and-buttons)

[Images](#images)

[Forms](#forms)

[Tables](#tables)

[Modals](#modals)

[Utility Classes](#utility-classes)


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


## Images
Adding .image will make any image mobile responsive

Stacking .image-round will make any image a circle

Stacking .image-rounded will give any image rounded corners

Stacking .display-block will center any image

```
<img src="http://placehold.it/200x200" class="image image-example">
<img src="http://placehold.it/200x200" class="image image-example">
<img src="http://placehold.it/200x200" class="image image-example">
```


## Forms
Form syntax is nearly unchanged. By default form fields have basic styles just to clean up paddings and margins, just surround the necessary columns in a < form >
```
<form>
  <div class="column md-12">
    <label>Name</label>
    <input type="text" placeholder="name">
  </div>
  <div class="column md-12">
    <label>Password</label>
    <input type="password">
  </div>
  <div class="column md-24">
    <label>Email Address</label>
    <input type="email" placeholder="contact@lethalin.com">
    <label>Message</label>
    <textarea rows="3"></textarea>
    <input type="submit" class="button" value="Submit">
    <input type="submit" class="button" value="Cancel">
  </div>
</form>
```


## Tables
Tables are also very easy, just wrap your standard table inside a .table class.
```
<div class="column">
  <div class="table">
    <table>
      <tr>
        <th>Rank</th>
		<th>Movie Title</th>
		<th>Genre</th>
		<th>Year</th>
      </tr>
	  <tr>
	    <th>1</th>
	    <td>The Fellowship of the Ring</td>
	    <td>Adventure, Fantasy</td>
	    <td>2001</td>
	  </tr>
	  <tr>
	    <th>2</th>
	    <td>Star Wars</td>
	    <td>Adventure, Sci-fi</td>
	    <td>1977</td>
	  </tr>
	  <tr>
	    <th>3</th>
	    <td>Iron Man</td>
	    <td>Sci-fi, Comic Book</td>
	    <td>2008</td>
	  </tr>
    </table>
  </div>
</div>
```


## Modals
Modal overlays require very little mark up. Right now Lethalin only supports one modal open at a time. Modals are supported on devices of all sizes. 

To create modals, use the following mark up:
```
<div id="examplemodal-modal" class="overlay">
  <div class="modal">
    <h2>Modal Overlay</h2>
    <div class="content">
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
```
Every instance of a modal will require the id to be "IDNAME-modal". Javascript checks the DOM for any elements with an id ending in "-modal", if it's found, its considered a modal.
To trigger and open a modal, give any anchor, button or element the "button-modal" class and a matching id. 
```
<a id="examplemodal" class="button button-modal">Get Started Today</a>
```


## Utility Classes
Basic helper classes, these will be updated as the framework grows.
```
.display-block 
```

```
.display-table
```

```
 .display-inline-block
```

```
 .display-none
```

```
.float-left
```

```
.float-right
```

```
.text-center
```

```
.text-right
```

```
.text-left
```

```
.text-justify
```
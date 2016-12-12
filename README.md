# Lethalin
Lethalin is the new solution for front-end web develpment. One framework that scales across all devices, Lethalin's boilerplate markup is fast, simple and easy to customize. With less than 500 lines of code, Lethalin is easy to maintain and expand on, making it the perfect framework to start a responsive project with.

Visit http://lethalin.com for more information and documentation.

## Get Lethalin
For stable release, download Lethalin directly from http://lethalin.com

Lethalin is also available in minified CSS


To clone directly from Github: `git clone https://github.com/johnuberbacher/Lethalin.git`

## Getting Started
Lethalin's is designed around a 24 column based system. It was built to scale with mobile-design first. 
The syntax for creating responsive columns is simple:
```
<div class="grid">
  <class="column">
    <class="example-column">
      .column
    </div>
  </div>
</div>
```
The .grid class holds all the columns together. It has a default max-width of 1000px, which can be changed easily. Anything smaller than 1000px retains a responsive width and height.


The syntax for multiple columns is just as simple:
```
<div class="grid">
  <class="column sm-12">
    <class="example-column">
      .column .sm-12
    </div>
  </div>
  <class="column sm-12">
    <class="example-column">
      .column .sm-12
    </div>
  </div>
</div>
```


Lethalin uses 3 different sizes for responsive columns: .sm-#, .md-# and .lg-#
```
<div class="grid">
  <class="column sm-12 md-6">
    <class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <class="column sm-12 md-6">
    <class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <class="column sm-12 md-6">
    <class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
  <class="column sm-12 md-6">
    <class="example-column">
      .column .sm-12 .md-6
    </div>
  </div>
</div>
```


Also remember that when not supplying a .sm-# class, .column will treat itself as a 24-width column.
```
<div class="grid">
  <class="column md-12">
    <class="example-column">
      .column .md-12
    </div>
  </div>
  <class="column md-12">
    <class="example-column">
      .column .md-12
    </div>
  </div>
</div>
```
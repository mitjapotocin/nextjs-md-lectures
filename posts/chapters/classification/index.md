---
title: 'Workflows in Orange'
date: '2014-08-26 15:59:00+00:00'
---

Before we dive into single-cell analysis, let us get familiar with the
tool that we will be using. Orange is a machine learning and
interactive data visualization platform, where data analysis pipeline
are designed as workflows. Orange workflows consist of
components that read, process and visualize the data. We call the
components “widgets”. Widgets are placed on a drawing board (the
“canvas”). Widgets communicate by sending information along a
communication channel. Output from one widget is used as input
to another.

<!!! float-aside !!!>
A simple workflow with two
connected widgets and one
widget without
connections. The
outputs of a widget
appear on the right,
while the inputs appear
on the left

![alt text](/images/chapters/classification/fig2.png)

We construct workflows by placing widgets onto the canvas and
connecting them by drawing a line from the transmitting widget to
the receiving widget. The widget’s outputs are on the right and the
inputs on the left. In the workflow above, the File widget sends
data to the Data Table widget.

<!!! float-aside !!!>
<p>
  111A simple workflow with two
  connected widgets and one
  widget without
  connections. The
  outputs of a widget
  appear on the right,
  while the inputs appear
  on the left

  <img src="/images/chapters/classification/fig2.png"/>
</p>

1We construct workflows by placing widgets onto the canvas and
connecting them by drawing a line from the transmitting widget to
the receiving widget. The widget’s outputs are on the right and the
inputs on the left. In the workflow above, the File widget sends
data to the Data Table widget.
1We construct workflows by placing widgets onto the canvas and
connecting them by drawing a line from the transmitting widget to
the receiving widget. The widget’s outputs are on the right and the
inputs on the left. In the workflow above, the File widget sends
data to the Data Table widget.
1We construct workflows by placing widgets onto the canvas and
connecting them by drawing a line from the transmitting widget to
the receiving widget. The widget’s outputs are on the right and the
inputs on the left. In the workflow above, the File widget sends
data to the Data Table widget.
1We construct workflows by placing widgets onto the canvas and
connecting them by drawing a line from the transmitting widget to
the receiving widget. The widget’s outputs are on the right and the
inputs on the left. In the workflow above, the File widget sends
data to the Data Table widget.


<!!! width-max !!!>
![alt text](/images/chapters/classification/fig2.png)

1We construct workflows by placing widgets onto the canvas and
connecting them by drawing a line from the transmitting widget to
the receiving widget. The widget’s outputs are on the right and the
inputs on the left. In the workflow above, the File widget sends
data to the Data Table widget.


### Code example
```
export async function getStaticPaths() {
  const files = fs.readdirSync('posts/books/');

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

```
Manuel Sanchez del Rio, from [The European Synchrotron Facility](http://www.esrf.eu/) in Grenoble, France, and Luca Rebuffi from [Elettra-Sincrotrone, Trieste](http://www.elettra.trieste.it/), Italy, were looking for a tool that would help them integrate the various tools for x-ray optics simulations, like the popular SHADOW and SRW. They discovered that the data workflow paradigm, like the one used in Orange Canvas, fits their needs perfectly. They took Orange, and replaced the existing widgets with new widgets that represent sources of photons (bending magnets, in the case of ESRF), various optical elements, like lenses and mirrors, and detectors. The channels between the widgets no longer pass data tables, like in the standard Orange, but rays of photons. How cool is this?


<div 
  data-image-120 
  data-float-left
  >
</div>

![alt text](/images/chapters/classification/fig1.png)


Manuel Sanchez del Rio, from [The European Synchrotron Facility](http://www.esrf.eu/) in Grenoble, France, and Luca Rebuffi from [Elettra-Sincrotrone, Trieste](http://www.elettra.trieste.it/), Italy, were looking for a tool that would help them integrate the various tools for x-ray optics simulations, like the popular SHADOW and SRW. They discovered that the data workflow paradigm, like the one used in Orange Canvas, fits their needs perfectly. They took Orange, and replaced the existing widgets with new widgets that represent sources of photons (bending magnets, in the case of ESRF), various optical elements, like lenses and mirrors, and detectors. The channels between the widgets no longer pass data tables, like in the standard Orange, but rays of photons. How cool is this?
<figure>
  <img src="/images/chapters/classification/fig1.png" >
 
</figure>
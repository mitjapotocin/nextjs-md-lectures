---
title: 'Orange Canvas applied to x-ray optics'
date: '2014-08-26 15:59:00+00:00'
---

Orange Canvas is being appropriated by guys who would like to use it as graphical environment for simulating x-ray optics.

Manuel Sanchez del Rio, from [The European Synchrotron Facility](http://www.esrf.eu/) in Grenoble, France, and Luca Rebuffi from [Elettra-Sincrotrone, Trieste](http://www.elettra.trieste.it/), Italy, were looking for a tool that would help them integrate the various tools for x-ray optics simulations, like the popular SHADOW and SRW. They discovered that the data workflow paradigm, like the one used in Orange Canvas, fits their needs perfectly. They took Orange, and replaced the existing widgets with new widgets that represent sources of photons (bending magnets, in the case of ESRF), various optical elements, like lenses and mirrors, and detectors. The channels between the widgets no longer pass data tables, like in the standard Orange, but rays of photons. How cool is this?

The result is a system in which the user can arrange the elements in a system that resembles the actual physical system, and then run the simulations using the most powerful tools available in x-ray optics.

The tool prototype has been presented at the [SPIE Optics + Photonic 2014](http://spie.org/optics-photonics.xml) in San Diego, the largest meeting of its kind.

We're really excited about this novel use of Orange Canvas.

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
## Why this project
On this project, I wanted an introduction to 3D and learning the basic of :
- the creation of an 3D object
- the animation of an 3D object
- the diffent textures and lighting
- the integration of a 3D object with a website

## What I learned
While this is a really simple project, I could figure out a couple of things :
1. The position in space and the importance of perspective
2. The combination of materials like glass, fresnel effect and matcap
3. The animation frame by frame and the type of transitions
4. Hangling events like screen resizing

## My Process

### Creating the blob
1. Create a sphere\
<img src="src/assets/Readme/create_sphere.png"
      width=200px/>
3. Add a material "displace" to morph your sphere\
   <img src="src/assets/Readme/add_material.png"
      width=200px/>
      <img src="src/assets/Readme/add_displace.png"
      width=200px/>
   <img src="src/assets/Readme/displaced_sphere.png"
      width=200px/>
5. Make the color of the sphere transparant (watch out it will disapear 🫥)\
   <img src="src/assets/Readme/transparent_color.png"
      width=200px/>
      <img src="src/assets/Readme/transparent_blob.png"
      width=200px/>
7. Add the material "glass"\
   <img src="src/assets/Readme/add_glass.png"
      width=200px/>
9. Add the material "Fresnel" and you can change the intensity for better result\
    <img src="src/assets/Readme/add_fresnel.png"
      width=200px/>
      <img src="src/assets/Readme/fresnel_blob.png"
      width=200px/>
   
### At this point you have a glass blob (YAY! 🎉) You can customize it as you wish!
   \
Here are some cool effect to perfectionize the way your glass look :
- Add a B&W rainbow effect to create some depth :\
  <img src="src/assets/Readme/add_rainbow.png"
      width=200px/>
      <img src="src/assets/Readme/rainbow_blob.png"
      width=200px/>
- Add a matcap to add some color reflection to your blob :\
  <img src="src/assets/Readme/add_matcap.png"
      width=200px/>
      <img src="src/assets/Readme/dark_blob.png"
      width=200px/>\
(Your can create your own matcap by just creating a sphere and adding some color to it,\ then export it as a png like this one :)\
<img src="src/assets/Readme/matcap_01.jpg"
      width=200px/>
      <img src="src/assets/Readme/colorized_blob.png"
      width=200px/>

### Animating the blob
1. Create frames
2. Modifying value like the color, the position or some of the material for each frame
3. Create an event and set it to loop
4. Make the event transition between the frames

## Here's the final result
![final blob](https://github.com/Huguesmmm/3d-blob/blob/main/src/assets/Readme/final_blob.gif?raw=true)






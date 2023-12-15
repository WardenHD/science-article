import Image from 'next/image'
import classes from './page.module.css'

export default function Home() {
  return (
    <main className={classes.main}>
      <h2>How aerodynamics helps F1 cars move faster</h2>
      <h3>Introduction</h3>
      <div className={classes.text_image_box}>
        <Image 
        src="https://www.vrogue.co/top-featureds-imp.news/wp-content/uploads/2021/07/2022-F1-Racer-1.jpg" 
        width={368}
        height={207}
        alt="f1-car"/>
        <p>
          The cars have been evolutionised from square shapes to round.
          These adaptations with shapes helped to reduce fuel use, and increase 
          the maximum speed. For F1 racers, the vital part is that vehicle will 
          have the best performance. Aerodynamics is the science of how things move 
          through the air. If the car has less aerodynamics, it will move slowly and 
          more fuel will be used to overcome the air resistance. There positive 
          consequences of developing this technology includes: more economical cars,
          and reduced emissions. However, even though the more aerodynamics reduce the
          emissions, it can cost more to assemble cars. Because of the complex 
          elements, it will be hard maintain the vehicle. This technology really helps
          in racing sports, and it doesn't require additional skills from the driver,
          if it's not complex.
        </p>
      </div>
      <h3>What is Aerodynamics and how does it work</h3>
      <div className={classes.text_image_box}>
        <p>
          Aerodynamics is how object moves through the air. It reduces or increases air
          resistance, which is slowing moving objects down. For example, if you try to
          move the cube with wheels, it will slow down fastly. But if you put a pyramid 
          at the front of the cube, you will see that it will move longer than previous
          one. So this is how aerodynamics work. There are four forces, acting on the 
          moving object: thrust, drag, weight (gravity), and normal force. When the 
          object is moving, the air acts on the object, causing it to stop. This force 
          is drag. When the object is more aerodynamic (cone), the drag will be less 
          than from less aerodynamic (cube). So more aerodynamic object has less drag. 
        </p>
        <Image 
        src="https://f1tcdn.net/articles/aero/images/aero-sim.jpg"
        width={360}
        height={207}
        alt='f1-aerodynamics'/>
      </div>
      <h3>Positive Impacts of the Aerodynamics</h3>
      <p>
        Aerodynamics is a decent technology, and it has positive impacts. The first 
        positive impact on the environment is less carbon dioxide (CO2) thrown into 
        the atmosphere. This is because car uses less fuel to overcome the air 
        resistance and to move. Second positive impact is that cars use less fuel. 
        So, we use less fossil fuel, burning of it is harmful to the environment. 
        Third is the increased range for electric vehicles. Because of reduced 
        aerodynamic drag it can move further on single charge. Next one impact is that 
        it increases vehicle safety, handling, and stability, especially on higher 
        speeds. Aerodynamics also helps to keep the engine cool.
      </p>
      <h3>Negative Impacts of the Aerodynamics</h3>
      <div className={classes.text_image_box}>
        <p>
          However, aerodynamics also have its negative impacts. The problem is that it 
          costs a lot of money. Spoilers, diffusors, etc. - all that is expensive. 
          And there is another issue - when car is more aerodynamic and moving at low
          speeds, aerodynamic systems won't be as effective as the car will move at 
          higher speed. Also, if the caf has low ground clearance, you probably won't
          use it in everyday life on rough roads and speed bumps. Materials, used in
          aerodynamic constructions, may not be recyclable and can harm the environment.
          Moreover, they produce sound during the driving, so you probably will hear it 
          inside. The complex parts such as movable spoiler, diffusors aren't easily
          repairable. 
        </p>
        <Image 
        src="https://autotrends.org/wp-content/uploads/carbon-fiber-spoiler.jpg"
        alt="audi-spoiler"
        width={368}
        height={207}/>
      </div>
      <h3>Conclusion</h3>
      <p>
        In conclusion, aerodynamics is a brilliant technology. And using it in racing
        sports is crucial for its safety improvements. It also reduces the harm to the
        environment, making cars more efficient. But overcomplicating it isn't worth 
        it. It would make the cars more unrepairable, unsafe, and expensive. There is 
        a one more big downside of this because used materials can possibly damage the 
        nature. Moreover, some aerodynamic features aren't practical in everyday life.
        However, in my opinion, this technology should be used in the sports 
        if it's not overcomplicated. 
      </p>
      <p className={classes.copyright}>© 2023 Artem Bezruchko. MIT License</p>
    </main>
  )
}

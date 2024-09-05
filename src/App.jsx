
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from "./components/MyCard";
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

function App() {
 return (
  <>
  <Header  titulo="Adopta un perrito" />
  <main className="gallery">
  <MyCard
       image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
       name="KING"
       desc="Lleno de energía y listo para jugar. !Dale a KING el hogar amoroso que se merece!" 
       color="danger"
       raza="Yorkshire"
       
  />
    
    <MyCard
       image="https://images.pexels.com/photos/1959052/pexels-photo-1959052.jpeg?auto=compress&cs=tinysrgb&w=600"
       name="LILA"
       desc="Lleno de energía y listo para jugar. !Dale a LILA el hogar amoroso que se merece!" 
       color="primary"
       raza="Pastor"
       
  />
   <MyCard
       image="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=600"
       name="CLAUSS"
       desc="Lleno de energía y listo para jugar. !Dale a CLAUSS el hogar amoroso que se merece!" 
       color="success"
       raza="Labrador"
       
  />
  <MyCard
       image="https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg?auto=compress&cs=tinysrgb&w=600"
       name="MEMO"
       desc="Lleno de energía y listo para jugar. !Dale a MEMO el hogar amoroso que se merece!" 
       color="success"
       raza="PITBULL"
       
  />
  </main>
  <Footer pie="@Explora nuestra galeria en adopcion, encuentra tu mascota ideal!!!sumate a nuestra comunidad!! siguenos en RRSS"/>
  </>
  
 );
  
}

export default App;

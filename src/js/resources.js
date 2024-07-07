import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Background: new ImageSource('images/RaceTrack_Bg.png'),
    RedCar: new ImageSource('images/Red_Car.png'),
    BlueCar: new ImageSource('images/Blue_Car.png'),
    Gun: new ImageSource('images/gun.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }
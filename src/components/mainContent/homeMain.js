import catalog from '../../asset/image/coverImage.png'
import Main from '../main/main'
import { Card, CardContent } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"



const HomeMain = (props) => {
    return (

        <div className="home-main flex flex-col">
            <div className='img m-2'>
                <img src={catalog} />
            </div>
            <div className='category w-full flex items-center justify-center'>
                <Carousel
                    opts={{
                        align: "end",
                    }}
                    className="w-full flex items-center justify-center"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-10"/>
                    <CarouselNext className= "right-10"/>
                </Carousel>
            </div>
        </div>

    )
}
export default HomeMain
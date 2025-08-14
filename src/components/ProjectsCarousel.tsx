import CustomArrow from "./CustomArrow";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const ProjectsCoursel = () => {
    return (
        <Carousel opts={{
            align: "start",
            loop: true, // This is the key line to make it loop

        }} orientation="vertical" className="w-full">
            <div className="hidden md:flex w-full justify-center p-10">
                <CustomArrow direction="up" isScrollPrev />
            </div>
            <CarouselContent className="-mt-1 h-[470px] w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="md:px-1 px-4">
                            <Card className="h-[450px] w-full bg-orange-300 border-none">
                                <CardContent className="flex items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden md:flex w-full justify-center p-10">
                <CustomArrow direction="down" />
            </div>

        </Carousel>
    )
}

export default ProjectsCoursel;
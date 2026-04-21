import bannerVideo from 'assets/banner.mp4';
import Container from 'components/Container';

const HomeBanner = () => {
    return (
        <div className="bg-moonstone-200">
            <Container>
                <div className="grid grid-cols-12 items-center gap-6">
                    <div className="col-span-12 flex flex-col gap-4 md:col-span-6">
                        <h1>Welcome to the Art Institute of Chicago</h1>
                        <p>
                            Welcome to the Art Institute of Chicago, home to a collection of art
                            that spans centuries and the globe—and one of Tripadvisor's “Best of the
                            Best” US attractions of 2025. We look forward to your visit and invite
                            you to explore our many exhibitions, join one of our free daily tours,
                            or make your own tour of must-see works.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <video autoPlay loop muted title="art-institute">
                            <source src={bannerVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeBanner;

import notFoundImage from 'assets/not-found.svg';
import Button from 'components/Button';
import { useNavigate } from 'react-router';
import routes from 'routes/index';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <img src={notFoundImage} alt="not-found" className="h-auto max-w-full" />
            <h3>The page you are looking does not exist!</h3>
            <Button color="flame" onClick={() => navigate(routes.home.path)}>
                Back to home
            </Button>
        </div>
    );
};

export default NotFound;

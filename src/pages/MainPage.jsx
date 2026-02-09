import { useSearchParams } from 'react-router-dom';

function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode');

    return (
        <div className={['main', mode].join(' ')}>
            <h1>React Router</h1>
            
            <button onClick={() => setSearchParams({ mode: 'dark' })}>
                {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default MainPage;

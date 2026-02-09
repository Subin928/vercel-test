import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>페이지를 찾을 수 없습니다</p>
            <Link to="/">홈으로 이동하기</Link>
        </div>
    );
}

export default NotFound;
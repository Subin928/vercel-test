import { Link } from "react-router-dom";

function StudentHeader() {
    return (
        <div className="student-header">
            <h2>React Router 실습</h2>
            <nav>
                <ul>
                    {/* 동적 라우팅 */}
                    <li><Link to="/student/kdt">학생 KDT</Link></li>
                    <li><Link to="/student/codingon">학생 코딩온</Link></li>
                    
                    {/* 쿼리 스트링 */}
                    <li><Link to="/student/new?name=re5th">쿼리 스트링 예제</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default StudentHeader;
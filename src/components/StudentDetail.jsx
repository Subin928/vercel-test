import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function StudentDetail() {
    // URL 파라미터 (:name)
    const { name } = useParams();
    
    // 쿼리 스트링 (?name=value)
    const [searchParams] = useSearchParams();
    const keyWord = searchParams.get('name');
    
    const navigate = useNavigate();

    return (
        <div className="student-detail">
            <h5>학생의 이름은 <strong>{name}</strong> 입니다.</h5>
            
            {keyWord && (
                <h5>실제 이름은 <strong>{keyWord}</strong> 입니다.</h5>
            )}
            
            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </div>
    );
}

export default StudentDetail;
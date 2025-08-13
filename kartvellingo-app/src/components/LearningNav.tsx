import { useNavigate } from "react-router-dom";
import "./LearningNav.css";

export default function LearningNav({
                                        jumpLabel,
                                        jumpPath,
                                        jumpState,
                                    }: {
    jumpLabel?: string;
    jumpPath?: string;
    jumpState?: Record<string, any>;
}) {
    const navigate = useNavigate();

    return (
        <div className="learning-nav">
            <button onClick={() => navigate("/plans")}>← Back to Plans</button>

            {jumpLabel && jumpPath && (
                <button onClick={() => navigate(jumpPath, jumpState ? { state: jumpState } : undefined)}>
                    {jumpLabel} →
                </button>
            )}
        </div>
    );
}

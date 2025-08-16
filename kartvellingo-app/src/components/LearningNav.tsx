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
            <button className="nav-link" onClick={() => navigate("/plans")}>
                ← Back to Plans
            </button>

            {jumpLabel && jumpPath ? (
                <button
                    className="nav-link"
                    onClick={() =>
                        navigate(jumpPath, jumpState ? { state: jumpState } : undefined)
                    }
                >
                    {jumpLabel} →
                </button>
            ) : (
                <span />
            )}
        </div>
    );
}

function ProgressModal({ isOpen, completed, total }) {
  if (!isOpen) return null

  const progress = total > 0 ? (completed / total) * 100 : 0

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Generating Certificates</h3>
        </div>
        <div className="modal-body">
          <div className="progress-container">
            <div className="progress-info">
              {total > 0 ? (
                <p>
                  Generating certificate {completed} of {total}
                </p>
              ) : (
                <p>Preparing to generate certificates...</p>
              )}
              {total > 0 && <p>{Math.round(progress)}%</p>}
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: total > 0 ? `${progress}%` : "10%",
                  animation: total === 0 ? "pulse 1.5s infinite" : "none",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressModal


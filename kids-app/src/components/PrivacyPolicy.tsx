interface PrivacyPolicyProps {
  onClose: () => void
}

const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content privacy-policy" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h2>🔒 Privacy Policy</h2>
        
        <div className="policy-content">
          <section>
            <h3>Our Commitment to Privacy</h3>
            <p>
              Kids Learn & Fun Time is committed to protecting the privacy of children. 
              This app is designed to be safe, educational, and privacy-friendly.
            </p>
          </section>

          <section>
            <h3>Information We Collect</h3>
            <ul>
              <li><strong>Learning Progress:</strong> We store learning progress (stars, completed letters, etc.) locally on your device only.</li>
              <li><strong>No Personal Information:</strong> We do NOT collect names, email addresses, or any personal information.</li>
              <li><strong>No Third-Party Tracking:</strong> We do NOT use analytics, cookies, or third-party tracking.</li>
            </ul>
          </section>

          <section>
            <h3>Data Storage</h3>
            <ul>
              <li>All data is stored locally in your browser's localStorage</li>
              <li>No data is sent to external servers</li>
              <li>Parents can reset all data anytime from the Parent Dashboard</li>
            </ul>
          </section>

          <section>
            <h3>Child Safety</h3>
            <ul>
              <li>No advertisements</li>
              <li>No in-app purchases</li>
              <li>No external links</li>
              <li>No social media integration</li>
              <li>Fully offline capable</li>
            </ul>
          </section>

          <section>
            <h3>Parents' Rights</h3>
            <p>Parents have full control to:</p>
            <ul>
              <li>View all learning progress</li>
              <li>Reset all stored data</li>
              <li>Set daily time limits</li>
              <li>Control accessibility settings</li>
            </ul>
          </section>

          <section>
            <h3>COPPA Compliance</h3>
            <p>
              This app is designed with children's privacy in mind and complies with 
              the Children's Online Privacy Protection Act (COPPA) by not collecting 
              any personal information from children.
            </p>
          </section>

          <section>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please use the 
              Feedback Form in the Parent Dashboard.
            </p>
          </section>

          <p className="last-updated">Last Updated: March 2026</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

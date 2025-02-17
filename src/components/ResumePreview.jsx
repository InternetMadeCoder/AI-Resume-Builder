const ResumePreview = ({ data }) => {
  const renderList = (items, className) => {
    return (
      <div className={`${className} preview-blk-list`}>
        {items.map((item, index) => (
          <div key={index} className="preview-item">
            {Object.values(item).map((value, i) => (
              <span key={i} className="preview-item-val">{value}</span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="preview-sc" className="print_area">
      <div className="container">
        <div className="preview-cnt">
          <div className="preview-cnt-l bg-green text-white">
            <div className="preview-blk">
              <div className="preview-image">
                {data.personalInfo.image && (
                  <img src={data.personalInfo.image} alt="Profile" id="image_dsp" />
                )}
              </div>
              <div className="preview-item preview-item-name">
                <span className="preview-item-val fw-6" id="fullname_dsp">
                  {`${data.personalInfo.firstName} ${data.personalInfo.middleName} ${data.personalInfo.lastName}`}
                </span>
              </div>
              <div className="preview-item">
                <span className="preview-item-val text-uppercase fw-6 ls-1" id="designation_dsp">
                  {data.personalInfo.designation}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>about</h3>
              </div>
              <div className="preview-blk-list">
                <div className="preview-item">
                  <span className="preview-item-val" id="phoneno_dsp">{data.personalInfo.phone}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-item-val" id="email_dsp">{data.personalInfo.email}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-item-val" id="address_dsp">{data.personalInfo.address}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-item-val" id="summary_dsp">{data.personalInfo.summary}</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>skills</h3>
              </div>
              {renderList(data.skills, 'skills-items')}
            </div>
          </div>

          <div className="preview-cnt-r bg-white">
            {/* Achievements */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>Achievements</h3>
              </div>
              {renderList(data.achievements, 'achievements-items')}
            </div>

            {/* Experience */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>experiences</h3>
              </div>
              {renderList(data.experience, 'experiences-items')}
            </div>

            {/* Education */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>educations</h3>
              </div>
              {renderList(data.education, 'educations-items')}
            </div>

            {/* Projects */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>projects</h3>
              </div>
              {renderList(data.projects, 'projects-items')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;

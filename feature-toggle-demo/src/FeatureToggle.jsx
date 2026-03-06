import React from 'react';

const featureToggle = ({isEnabled, featureName}) => {
    return (
        <div className="feature-box">
            {isEnabled ? (
                <div className="enabled-feature">
                    <h3> Feature: {featureName}</h3>
                    <p>The feature is ACTIVE.</p>
                </div>
            ) : (
                <div className="disabled-feature">
                    <p>Feature <strong>[{featureName}]</strong> is disabled.</p>
                </div>
            )}
        </div>
    );
};
export default FeatureToggle;
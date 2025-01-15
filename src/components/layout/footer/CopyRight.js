import React from "react";
import useIsSecondary from "@/hooks/useIsSecondary";
const CopyRight = () => {
  const { isSecondary } = useIsSecondary();
  return (
    <div>
      <div>
        <p className="text-base text-center sm:text-start text-darkgray">
          © 2024 Powered by{" "}
          <a href="#" className="hover:text-primaryColor">
            Neuronexa Labs
          </a>{" "}
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default CopyRight;

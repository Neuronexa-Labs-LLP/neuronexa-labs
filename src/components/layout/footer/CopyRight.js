import Image from "next/image";
import React from "react";
import logoImage from "@/assets/images/logo/logo_2.png";
import useIsSecondary from "@/hooks/useIsSecondary";
import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import HeadingPrimaryXl from "@/components/shared/headings/HeadingPrimaryXl ";
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

/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// VR dashboards components
import BaseLayout from "layouts/virtual-reality/components/BaseLayout";

function VRInfo() {

  return (
    <BaseLayout>
      <SoftBox
        minHeight="100vh"
        ml={{ xs: 0, md: 10 }}
        mt={{ xs: 0, md: 4 }}
        pt={{ xs: 16, md: 32 }}
        pb={{ xs: 0, md: 3 }}
        sx={{ transform: "scale(1.1)" }}
      >
        <SoftTypography variant="h4" fontWeight="bold" color="white">
          Virtual Reality page is empty
        </SoftTypography>
      </SoftBox>
    </BaseLayout>
  );
}

export default VRInfo;

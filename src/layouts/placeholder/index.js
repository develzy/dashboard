import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function Placeholder({ title }) {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <SoftTypography variant="h4" fontWeight="bold">
                        {title}
                    </SoftTypography>
                    <SoftTypography variant="body1" fontWeight="regular">
                        Halaman ini sedang dalam pengembangan.
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

Placeholder.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Placeholder;

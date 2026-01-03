/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Santri({ image, name, email }) {
    return (
        <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox mr={2}>
                <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                    {name}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary">
                    {email}
                </SoftTypography>
            </SoftBox>
        </SoftBox>
    );
}

function Info({ title, subtitle }) {
    return (
        <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="caption" fontWeight="medium" color="text">
                {title}
            </SoftTypography>
            <SoftTypography variant="caption" color="secondary">
                {subtitle}
            </SoftTypography>
        </SoftBox>
    );
}

const santriTableData = {
    columns: [
        { name: "santri", align: "left" },
        { name: "info", align: "left" },
        { name: "status", align: "center" },
        { name: "tanggal_masuk", align: "center" },
        { name: "action", align: "center" },
    ],

    rows: [
        {
            santri: <Santri image={team2} name="Ahmad Fauzi" email="ahmad.fauzi@pesantren.com" />,
            info: <Info title="Kelas 10" subtitle="Asrama Al-Farabi" />,
            status: (
                <SoftBadge variant="gradient" badgeContent="aktif" color="success" size="xs" container />
            ),
            tanggal_masuk: (
                <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    12/07/2023
                </SoftTypography>
            ),
            action: (
                <SoftTypography
                    component="a"
                    href="#"
                    variant="caption"
                    color="secondary"
                    fontWeight="medium"
                >
                    Edit
                </SoftTypography>
            ),
        },
        {
            santri: <Santri image={team3} name="Siti Aminah" email="siti.aminah@pesantren.com" />,
            info: <Info title="Kelas 11" subtitle="Asrama Khadijah" />,
            status: (
                <SoftBadge variant="gradient" badgeContent="aktif" color="success" size="xs" container />
            ),
            tanggal_masuk: (
                <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    15/07/2022
                </SoftTypography>
            ),
            action: (
                <SoftTypography
                    component="a"
                    href="#"
                    variant="caption"
                    color="secondary"
                    fontWeight="medium"
                >
                    Edit
                </SoftTypography>
            ),
        },
        {
            santri: <Santri image={team4} name="Budi Santoso" email="budi.santoso@pesantren.com" />,
            info: <Info title="Kelas 12" subtitle="Asrama Ibnu Sina" />,
            status: (
                <SoftBadge variant="gradient" badgeContent="cuti" color="secondary" size="xs" container />
            ),
            tanggal_masuk: (
                <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    10/07/2021
                </SoftTypography>
            ),
            action: (
                <SoftTypography
                    component="a"
                    href="#"
                    variant="caption"
                    color="secondary"
                    fontWeight="medium"
                >
                    Edit
                </SoftTypography>
            ),
        },
    ],
};

export default santriTableData;

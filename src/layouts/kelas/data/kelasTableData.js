/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

function Kelas({ nama, wali_kelas }) {
    return (
        <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="button" fontWeight="medium">
                {nama}
            </SoftTypography>
            <SoftTypography variant="caption" color="secondary">
                Wali Kelas: {wali_kelas}
            </SoftTypography>
        </SoftBox>
    );
}

function Tingkat({ level, program }) {
    return (
        <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="caption" fontWeight="medium" color="text">
                {level}
            </SoftTypography>
            <SoftTypography variant="caption" color="secondary">
                {program}
            </SoftTypography>
        </SoftBox>
    );
}

const kelasTableData = {
    columns: [
        { name: "kelas", align: "left" },
        { name: "tingkat", align: "left" },
        { name: "status", align: "center" },
        { name: "jumlah_santri", align: "center" },
        { name: "action", align: "center" },
    ],

    rows: [
        {
            kelas: <Kelas nama="10 IPA 1" wali_kelas="Ust. Abdullah" />,
            tingkat: <Tingkat level="Kelas 10" program="IPA" />,
            status: (
                <SoftBadge variant="gradient" badgeContent="aktif" color="success" size="xs" container />
            ),
            jumlah_santri: (
                <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    30 Santri
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
            kelas: <Kelas nama="10 IPS 1" wali_kelas="Ust. Ibrahim" />,
            tingkat: <Tingkat level="Kelas 10" program="IPS" />,
            status: (
                <SoftBadge variant="gradient" badgeContent="aktif" color="success" size="xs" container />
            ),
            jumlah_santri: (
                <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    28 Santri
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
            kelas: <Kelas nama="11 IPA 1" wali_kelas="Ust. Zakaria" />,
            tingkat: <Tingkat level="Kelas 11" program="IPA" />,
            status: (
                <SoftBadge variant="gradient" badgeContent="aktif" color="success" size="xs" container />
            ),
            jumlah_santri: (
                <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    32 Santri
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

export default kelasTableData;

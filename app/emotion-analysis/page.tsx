import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/emotion-analysis/Section1";
import Section2 from "@/components/sections/emotion-analysis/Section2";
import Section3 from "@/components/sections/emotion-analysis/Section3";

export default function EmotionAnalysis() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}

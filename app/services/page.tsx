import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/services/Section1";
import Section2 from "@/components/sections/services/Section2";
import Section3 from "@/components/sections/services/Section3";
import Section4 from "@/components/sections/services/Section4";
import Section9 from "@/components/sections/home/Section9";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Våre Tjenester" current_page="Våre Tjenester" />
                <Section1 title="Transformer din bransje med AI-løsninger og digital design" display="d-block" ds_btn="d-none" />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section9 bordertop="" />
            </Layout>
        </>
    );
}

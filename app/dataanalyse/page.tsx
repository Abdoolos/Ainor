import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/dataanalyse/Section1";
import Section2 from "@/components/sections/dataanalyse/Section2";
import Section3 from "@/components/sections/dataanalyse/Section3";
import Section4 from "@/components/sections/dataanalyse/Section4";
import Section5 from "@/components/sections/dataanalyse/Section5";
import Section9 from "@/components/sections/home/Section9";

export default function Dataanalyse() {
    return (
        <>
            <Layout>
                <PageHeader title="Dataanalyse" current_page="Dataanalyse" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section9 bordertop="" />
            </Layout>
        </>
    );
}

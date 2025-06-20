import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/ai-radgivning/Section1";
import Section2 from "@/components/sections/ai-radgivning/Section2";
import Section3 from "@/components/sections/ai-radgivning/Section3";
import Section4 from "@/components/sections/ai-radgivning/Section4";
import Section5 from "@/components/sections/ai-radgivning/Section5";
import Section9 from "@/components/sections/home/Section9";

export default function AIRadgivning() {
    return (
        <>
            <Layout>
                <PageHeader title="AI-rådgivning" current_page="AI-rådgivning" />
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

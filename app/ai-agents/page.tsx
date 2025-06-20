import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/ai-agents/Section1";
import Section2 from "@/components/sections/ai-agents/Section2";
import Section3 from "@/components/sections/ai-agents/Section3";
import Section4 from "@/components/sections/ai-agents/Section4";
import Section5 from "@/components/sections/ai-agents/Section5";
import Section9 from "@/components/sections/home/Section9";

export default function AIAgents() {
    return (
        <>
            <Layout>
                <PageHeader title="AI Agents" current_page="AI Agents" />
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

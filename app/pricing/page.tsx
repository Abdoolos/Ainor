import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/pricing/Section1";
import Section9 from "@/components/sections/home/Section9";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Kreative AI-løsninger" current_page="Kreative AI-løsninger" />
                <Section1 />
                <Section9 bordertop="" />
            </Layout>
        </>
    );
}

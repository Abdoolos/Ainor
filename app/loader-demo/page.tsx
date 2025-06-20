"use client";
import { useState } from 'react';
import CustomLoader from '@/components/elements/CustomLoader';
import Layout from '@/components/layout/Layout';

export default function LoaderDemo() {
    const [activeLoader, setActiveLoader] = useState<string | null>(null);

    const showLoader = (type: string, duration = 3000) => {
        setActiveLoader(type);
        setTimeout(() => setActiveLoader(null), duration);
    };

    return (
        <Layout>
            <section className="pt-120 pb-120 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-8">
                            <h1 className="text-white mb-4">AINORAB Loader Demo</h1>
                            <p className="text-white-50 fs-5">
                                تجربة جميع أنواع اللودرات المتاحة في النظام
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Small Loader Demo */}
                        <div className="col-lg-4">
                            <div className="demo-card bg-white rounded-4 p-4 text-center h-100">
                                <div className="demo-icon mb-3">
                                    <i className="bi bi-circle text-primary fs-1"></i>
                                </div>
                                <h5 className="mb-3">Small Loader</h5>
                                <p className="text-muted mb-4">
                                    مناسب للعناصر الصغيرة والنماذج
                                </p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => showLoader('small')}
                                >
                                    Test Small Loader
                                </button>
                                <div className="mt-3">
                                    <small className="text-muted">200x200px</small>
                                </div>
                            </div>
                        </div>

                        {/* Medium Loader Demo */}
                        <div className="col-lg-4">
                            <div className="demo-card bg-white rounded-4 p-4 text-center h-100">
                                <div className="demo-icon mb-3">
                                    <i className="bi bi-square text-success fs-1"></i>
                                </div>
                                <h5 className="mb-3">Medium Loader</h5>
                                <p className="text-muted mb-4">
                                    الحجم الافتراضي للاستخدام العام
                                </p>
                                <button 
                                    className="btn btn-success"
                                    onClick={() => showLoader('medium')}
                                >
                                    Test Medium Loader
                                </button>
                                <div className="mt-3">
                                    <small className="text-muted">300x300px</small>
                                </div>
                            </div>
                        </div>

                        {/* Large Loader Demo */}
                        <div className="col-lg-4">
                            <div className="demo-card bg-white rounded-4 p-4 text-center h-100">
                                <div className="demo-icon mb-3">
                                    <i className="bi bi-octagon text-warning fs-1"></i>
                                </div>
                                <h5 className="mb-3">Large Loader</h5>
                                <p className="text-muted mb-4">
                                    للشاشات الكبيرة والعمليات المعقدة
                                </p>
                                <button 
                                    className="btn btn-warning"
                                    onClick={() => showLoader('large')}
                                >
                                    Test Large Loader
                                </button>
                                <div className="mt-3">
                                    <small className="text-muted">400x400px</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Messages Demo */}
                    <div className="row mt-8">
                        <div className="col-12">
                            <div className="demo-section bg-white rounded-4 p-5">
                                <h4 className="mb-4 text-center">رسائل مخصصة</h4>
                                <div className="row g-3">
                                    <div className="col-md-3">
                                        <button 
                                            className="btn btn-outline-primary w-100"
                                            onClick={() => showLoader('loading-data')}
                                        >
                                            Loading Data
                                        </button>
                                    </div>
                                    <div className="col-md-3">
                                        <button 
                                            className="btn btn-outline-success w-100"
                                            onClick={() => showLoader('processing-ai')}
                                        >
                                            Processing AI
                                        </button>
                                    </div>
                                    <div className="col-md-3">
                                        <button 
                                            className="btn btn-outline-warning w-100"
                                            onClick={() => showLoader('analyzing')}
                                        >
                                            Analyzing Results
                                        </button>
                                    </div>
                                    <div className="col-md-3">
                                        <button 
                                            className="btn btn-outline-info w-100"
                                            onClick={() => showLoader('uploading')}
                                        >
                                            Uploading Files
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Overview */}
                    <div className="row mt-8">
                        <div className="col-12">
                            <div className="features-overview bg-gradient-primary rounded-4 p-5 text-white">
                                <h4 className="text-center mb-5">مميزات نظام اللودر</h4>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="feature-item d-flex align-items-start gap-3">
                                            <i className="bi bi-cpu text-white fs-4"></i>
                                            <div>
                                                <h6>AI Core متحرك</h6>
                                                <p className="mb-0 small opacity-75">
                                                    مركز ذكي مع 3 حلقات دوارة وتأثير نبضات
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item d-flex align-items-start gap-3">
                                            <i className="bi bi-arrow-repeat text-white fs-4"></i>
                                            <div>
                                                <h6>تدفق البيانات</h6>
                                                <p className="mb-0 small opacity-75">
                                                    خطوط البيانات المتحركة في 4 اتجاهات
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item d-flex align-items-start gap-3">
                                            <i className="bi bi-phone text-white fs-4"></i>
                                            <div>
                                                <h6>تصميم متجاوب</h6>
                                                <p className="mb-0 small opacity-75">
                                                    محسن لجميع الشاشات والأجهزة
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item d-flex align-items-start gap-3">
                                            <i className="bi bi-palette text-white fs-4"></i>
                                            <div>
                                                <h6>ألوان متناسقة</h6>
                                                <p className="mb-0 small opacity-75">
                                                    نظام ألوان متطور يتماشى مع هوية الموقع
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Loaders */}
                <CustomLoader 
                    isVisible={activeLoader === 'small'}
                    message="Small Loader Demo"
                    size="small"
                />
                <CustomLoader 
                    isVisible={activeLoader === 'medium'}
                    message="Medium Loader Demo"
                    size="medium"
                />
                <CustomLoader 
                    isVisible={activeLoader === 'large'}
                    message="Large Loader Demo"
                    size="large"
                />
                <CustomLoader 
                    isVisible={activeLoader === 'loading-data'}
                    message="Loading data"
                    size="medium"
                />
                <CustomLoader 
                    isVisible={activeLoader === 'processing-ai'}
                    message="Processing AI"
                    size="medium"
                />
                <CustomLoader 
                    isVisible={activeLoader === 'analyzing'}
                    message="Analyzing results"
                    size="medium"
                />
                <CustomLoader 
                    isVisible={activeLoader === 'uploading'}
                    message="Uploading files"
                    size="medium"
                />
            </section>

            <style jsx>{`
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }

                .demo-card {
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .demo-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    transition: left 0.3s ease;
                }

                .demo-card:hover::before {
                    left: 0;
                }

                .demo-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                }

                .demo-section {
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }

                .feature-item {
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                }

                .btn {
                    transition: all 0.3s ease;
                }

                .btn:hover {
                    transform: translateY(-2px);
                }
            `}</style>
        </Layout>
    );
}

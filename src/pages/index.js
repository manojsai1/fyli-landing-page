import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import ProductScroll from '../components/ProductScroll';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import StoreIcon from '../svg/StoreIcon';
import DesignIcon from '../svg/DesignIcon';
import OrderIcon from '../svg/OrderIcon';
import PayIcon from '../svg/PayIcon';
import Testimonial from '../components/Testimonal';

export default () => (
  <Layout>
    <section id="home" className="pt-20 md:pt-40 mt-20 mb-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Are you a modern day Influencer?
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Fyli is a free end-to-end platform for selling your products and merch online. All you
            have to do is BE AWESOME. Leave the rest to us.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sign up for early access!</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Features</h2>
        <div className="py-10 flex flex-col mx-3 mt-12 sm:flex-row flex-wrap">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StoreIcon className="inline-block" />
              <p className="font-semibold text-xl mt-6">Custom Store</p>
              <p className="mt-4">
                We will build a custom storefront tailored to your brand, which will be hosted and
                managed on our secure and reliable servers.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <DesignIcon />
              <p className="font-semibold text-xl mt-6">Bespoke Design</p>
              <p className="mt-4">
                Our team of in-house designers will make sure that your already awesome designs look
                even better on the real products.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <OrderIcon />
              <p className="font-semibold text-xl mt-6">Order Fulfilment</p>
              <p className="mt-4">
                We will produce, pack and ship your products directly to your fans. You focus on
                what you do best, CREATE. Forget about the rest.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <PayIcon />
              <p className="font-semibold text-xl mt-6">Monthly Payouts</p>
              <p className="mt-4">
                You can track all orders on the influencer dashboard along with granular revenue
                details. Your profits will be paid out on a monthly basis.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="works" className="py-20 lg:py-30">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center">How it works?</h2>
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Onboarding</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will work with you 1:1 to set up your store. We
              will help you finalize the products, designs, pricing and the look of your store.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Revenue analytics</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Upon onboarding you will be given access to the influencer dashboard, which will bring
              all the store data in one place for you to analyze and optimize.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Profit Payout</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              The profit generated from the sales of your products will be paid out to you on a
              monthly basis. This is negotiable depending upon your sales volume.*
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </section>
    <section id="products" className="py-20 lg:pt-32">
      <ProductScroll />
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <Testimonial />
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your brand?</h3>
      <p className="mt-8 text-xl font-light">
        We are currently looking for super awesome influencers to kickstart Fyli in India.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
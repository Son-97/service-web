import React from "react";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";

import { Container, Wrapper } from "../layout";
import bg_detail from "../../images/bg_detail.jpg";
import SectionHeaderTitleBg from "../../commons/SectionHeaderTitleBg";
import Pest_1 from "../../images/detail/pest_1.jpg";
import Pest_2 from "../../images/detail/pest_2.jpg";

import {
  ServiceDetailContainerStyle,
  MenuContainer,
  ContentDetail,
} from "./styles";

const content = `
<div className="context-block">
  <h2>Fly Control</h2>
  <div class="text">
    <p>
      San Antonio and the surrounding areas experience high
      termite activity. It’s not a matter of if your home will
      become infested by these wood destroying insects but when.
    </p>
    <p>
      At Family Pest Control, we understand the havoc these
      insects can cause. Whether they’re subterranean termites or
      Formosan termites, they’re problematic and need to go.
      That’s why we perform highly effective termite control
      services that address foraging termites as well as entire
      termite colonies.
    </p>
  </div>
  <div class="image-block">
    <div class="flex justify-between items-center mb-30">
      <div class="image">
        <img src=${Pest_1} alt="" />
      </div>
      <div class="image">
        <img src=${Pest_2} alt="" />
      </div>
    </div>
  </div>
  <div class="text">
    <p>
      Like ants, termites have different forms that live in what
      is referred to a caste system. One of the more destructive
      termite castes is made up of workers that perform nest
      maintenance and forage for food.
    </p>
    <p>
      The workers are frequently found infesting - and ingesting -
      wood in homes, businesses, and other structures. While they
      primarily like to feed on wood, workers will also eat plants
      at any level of decomposition.
    </p>
  </div>
  <h3>Fly Control Process</h3>
  <div class="text">
    <p>
      Pestico Pest Control has been treating termites for almost
      40 years. We’re termite experts and have a comprehensive
      process for finding, eliminating, and preventing termite
      infestations.
    </p>
  </div>
  <div className="process-block-wrapper">
    <div class="process-block">
      <div class="count">01</div>
      <h4>Fly Control Inspection</h4>
      <div class="text">
        <p>
          A licensed pest control technician will come to your
          property to conduct a thorough inspection to identify if
          you have termites, the severity of termite activity and
          damage, as well as the conducive conditions that could
          be attracting these pests to your home.
        </p>
        <p>
          Based on the findings, the technician will develop a
          termite control proposal for you to review.
        </p>
      </div>
    </div>
    <div class="process-block">
      <div class="count">02</div>
      <h4>Fly Control Treatment</h4>
      <div class="text">
        <p>
          Our expert personnel relies on Termidor® liquid
          treatments to completely eradicate termite activity
          within our customers' homes. We will dig a shallow
          trench around the entire perimeter of your home and rod
          the product into the base of the foundation to create a
          barrier against termites.
        </p>
        <p>
          We do not stop there. We will treat all plumbing
          penetrations through the entirety of your foundation
          and, if necessary, treat any crawl space or attic that
          may be susceptible to termite activity. The only way to
          fully stop termite damage is by eliminating all threats.
        </p>
      </div>
    </div>
    <div class="process-block">
      <div class="count">03</div>
      <h4>Fly Control Treatment</h4>
      <div class="text">
        <p>
          Our expert personnel relies on Termidor® liquid
          treatments to completely eradicate termite activity
          within our customers' homes. We will dig a shallow
          trench around the entire perimeter of your home and rod
          the product into the base of the foundation to create a
          barrier against termites.
        </p>
        <p>
          We do not stop there. We will treat all plumbing
          penetrations through the entirety of your foundation
          and, if necessary, treat any crawl space or attic that
          may be susceptible to termite activity. The only way to
          fully stop termite damage is by eliminating all threats.
        </p>
      </div>
    </div>
  </div>
  <h3>Pestico Fly Control Warranty</h3>
  <div class="text">
    <p>
      We are confident in our training and in our products. We
      provide all of our customers with a one-year termite
      treatment warranty that can be transferred if the home is
      sold.
    </p>
    <p>
      We also provide extended termite treatment warranties for
      any qualifying home.
    </p>
  </div>
</div>
`;

const data = [
  {
    title: "Cockroach Control",
    slug: "abc",
    content: `
      <div className="context-block">
        <h2>Fly Control</h2>
        <div class="text">
          <p>
            San Antonio and the surrounding areas experience high
            termite activity. It’s not a matter of if your home will
            become infested by these wood destroying insects but when.
          </p>
          <p>
            At Family Pest Control, we understand the havoc these
            insects can cause. Whether they’re subterranean termites or
            Formosan termites, they’re problematic and need to go.
            That’s why we perform highly effective termite control
            services that address foraging termites as well as entire
            termite colonies.
          </p>
        </div>
        <div class="image-block">
          <div class="flex justify-between items-center mb-30">
            <div class="image">
              <img src=${Pest_1} alt="" />
            </div>
            <div class="image">
              <img src=${Pest_2} alt="" />
            </div>
          </div>
        </div>
        <div class="text">
          <p>
            Like ants, termites have different forms that live in what
            is referred to a caste system. One of the more destructive
            termite castes is made up of workers that perform nest
            maintenance and forage for food.
          </p>
          <p>
            The workers are frequently found infesting - and ingesting -
            wood in homes, businesses, and other structures. While they
            primarily like to feed on wood, workers will also eat plants
            at any level of decomposition.
          </p>
        </div>
        <h3>Fly Control Process</h3>
        <div class="text">
          <p>
            Pestico Pest Control has been treating termites for almost
            40 years. We’re termite experts and have a comprehensive
            process for finding, eliminating, and preventing termite
            infestations.
          </p>
        </div>
        <div className="process-block-wrapper">
          <div class="process-block">
            <div class="count">01</div>
            <h4>Fly Control Inspection</h4>
            <div class="text">
              <p>
                A licensed pest control technician will come to your
                property to conduct a thorough inspection to identify if
                you have termites, the severity of termite activity and
                damage, as well as the conducive conditions that could
                be attracting these pests to your home.
              </p>
              <p>
                Based on the findings, the technician will develop a
                termite control proposal for you to review.
              </p>
            </div>
          </div>
          <div class="process-block">
            <div class="count">02</div>
            <h4>Fly Control Treatment</h4>
            <div class="text">
              <p>
                Our expert personnel relies on Termidor® liquid
                treatments to completely eradicate termite activity
                within our customers' homes. We will dig a shallow
                trench around the entire perimeter of your home and rod
                the product into the base of the foundation to create a
                barrier against termites.
              </p>
              <p>
                We do not stop there. We will treat all plumbing
                penetrations through the entirety of your foundation
                and, if necessary, treat any crawl space or attic that
                may be susceptible to termite activity. The only way to
                fully stop termite damage is by eliminating all threats.
              </p>
            </div>
          </div>
          <div class="process-block">
            <div class="count">03</div>
            <h4>Fly Control Treatment</h4>
            <div class="text">
              <p>
                Our expert personnel relies on Termidor® liquid
                treatments to completely eradicate termite activity
                within our customers' homes. We will dig a shallow
                trench around the entire perimeter of your home and rod
                the product into the base of the foundation to create a
                barrier against termites.
              </p>
              <p>
                We do not stop there. We will treat all plumbing
                penetrations through the entirety of your foundation
                and, if necessary, treat any crawl space or attic that
                may be susceptible to termite activity. The only way to
                fully stop termite damage is by eliminating all threats.
              </p>
            </div>
          </div>
        </div>
        <h3>Pestico Fly Control Warranty</h3>
        <div class="text">
          <p>
            We are confident in our training and in our products. We
            provide all of our customers with a one-year termite
            treatment warranty that can be transferred if the home is
            sold.
          </p>
          <p>
            We also provide extended termite treatment warranties for
            any qualifying home.
          </p>
        </div>
      </div>
    `,
  },
  {
    title: "Termites Control",
    slug: "abc",
  },
  {
    title: "Termites Control",
    slug: "abc",
  },
  {
    title: "Termites Control",
    slug: "abc",
  },
];

function index() {
  return (
    <ServiceDetailContainerStyle>
      <SectionHeaderTitleBg
        title="Detail"
        bg={bg_detail}
        colorWhite={true}
        isOpactity={false}
      />

      <Container>
        <Wrapper>
          <div className="flex detail-container">
            <MenuContainer>
              <div className="sidebar">
                <div className="title">Pest Control</div>
                <div className="list">
                  {data.map((item, idx) => (
                    <div className="list-item">
                      <Link key={idx} to={item.slug}>
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </MenuContainer>
            <ContentDetail>{renderHTML(content)}</ContentDetail>
          </div>
        </Wrapper>
      </Container>
    </ServiceDetailContainerStyle>
  );
}

export default index;

import * as React from 'react'
import styled from 'styled-components'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const DesireToPlantPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        className="splash"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/thw99qcq417p/4w5blxepB6UIEVbWzrqAaC/e6647b4b38a980e80be5fe1ea75d05e5/pnw-bg.jpeg?w=3000&h=2000&fl=progressive&q=50&fm=jpg)`,
        }}
      >
        <Section $isShort>
          <h1>Church Planting Fund Grant Guidelines</h1>
        </Section>
      </div>
      <Section $isNarrow>
        <section
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.6',
            fontFamily: 'serif',
          }}
        >
          <ol type="I">
            <li>
              <h2>Church Planting Grant Program Description</h2>
              <ol type="A">
                <li>
                  The Church Planting Grant Program is designed to encourage and
                  support church planting activity within the bounds of Classis
                  Pacific Northwest, by providing major financial support during
                  the first four years of a church plant.
                </li>
                <li>
                  Grant applications will be submitted to the Classical
                  Committee for Home Missions for recommendation and approval
                  for each of the four years of a church planting grant, with
                  support ordinarily decreasing over the four year period.
                </li>
              </ol>
            </li>
            <li>
              <h2>Application Guidelines</h2>
              <ol type="A">
                <li>
                  Application for Church Planting Grants shall include the
                  following:
                  <ol type="1">
                    <li>
                      Budget — Applicants will demonstrate need by including an
                      annual budget for the year of the request and shall
                      project both expenses and sources of funding.
                      <ol type="a">
                        <li>
                          Expenses should be broken down with sufficient detail
                          to identify relative costs of salaries, property,
                          supplies, promotion and advertising, etc.
                        </li>
                        <li>
                          Income should be broken down into three major sources:
                          <ol>
                            <li>
                              Internal Sources: this includes core group giving
                              pledged, and overseeing church commitment.
                            </li>
                            <li>
                              External Sources: this includes other church
                              offerings (including Joint Venture Churches), and
                              individuals.
                            </li>
                            <li>
                              Classical Church Planting Fund: this includes the
                              formula driven grants from the fund.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Four-Year Funding Plan—Applicants will show the amount of
                      any previous grants from the Fund, and anticipated future
                      grants. The four-year funding schedule (below) will
                      provide a baseline for this funding plan.
                    </li>
                    <li>
                      Previous year(s) profit and loss statements, including YTD
                      statement for current year.
                    </li>
                  </ol>
                </li>
                <li>
                  Application Deadline: Applications for Church Planting Funds
                  shall ordinarily be submitted to the Classical Committee for
                  Home Missions twelve weeks prior to the date of classis at
                  which the application will be considered.
                </li>
              </ol>
            </li>
            <li>
              <h2>Reporting Requirements</h2>
              <ol type="A">
                <li>
                  Plants receiving funds will submit to the Classical Committee
                  for Home Missions at year-end a standard “profit and loss”
                  statement tracking expenses by budget category and income by
                  source (Internal Giving, External sources, Classical Planting
                  Fund grants)
                </li>
                <li>
                  Plants receiving funds will submit a balance sheet at year end
                  showing cash on hand.
                </li>
                <li>
                  Plants will submit the proposed budget for the upcoming year.
                </li>
                <li>
                  Plants will report monthly average attendance at Sunday
                  services, as well as membership statistics.
                </li>
              </ol>
            </li>
            <li>
              <h2>Reinvestment Provision</h2>
              <ol type="A">
                <li>
                  Church Plants receiving grants from the Classical Church
                  Planting fund should actively seek to reinvest in the
                  Classical Church Planting Fund.
                </li>
                <li>
                  It is the aim that reinvestment will continue in perpetuity,
                  with the goal of making the fund a perpetual endowment for
                  church planting.
                </li>
                <li>
                  All churches in Classis are encouraged to invest in the
                  Classical Church Planting Fund.
                </li>
              </ol>
            </li>
            <li>
              <h2>Four Year Funding Schedule</h2>
              <ol type="A">
                <li>
                  Church planting grants from the Classical Church Planting Fund
                  will typically be offered for a four year period and
                  calculated to provide a declining percentage of the
                  “outstanding need” for funds, calculated as the total annual
                  budget less the internal giving (core group's projected
                  offerings and the overseeing church's contribution).
                  <ol>
                    <li>First year grant equals 80% of Outstanding Need</li>
                    <li>Second year grant equals 60% of Outstanding Need</li>
                    <li>Third year grant equals 40% of Outstanding Need</li>
                    <li>Fourth year grant equals 20% of Outstanding Need</li>
                  </ol>
                </li>
                <li>
                  The goal of the funding schedule is to provide maximal support
                  near the beginning of the work, when the raising of funds is
                  most challenging, and to encourage increased independence of
                  the core group and shared support of the work over time.
                </li>
                <li>
                  Support after four full years will be provided only in
                  extraordinary circumstances. The Church Assistance Fund (CAF)
                  should first be used for these circumstances.
                </li>
                <li>
                  Initial partial year disbursals.
                  <ol>
                    <li>
                      Grant requests for funding for less than six months of a
                      calendar year shall not constitute the first year of
                      funding (year zero).
                    </li>
                    <li>
                      Grant requests for less than six months shall follow the
                      80% disbursal guideline (as shall the first full year).
                    </li>
                    <li>
                      Grant requests for more than six months of a calendar year
                      shall constitute the first year of funding (year 1).
                    </li>
                  </ol>
                  <li>
                    Below is a highly simplified example, assuming low-end
                    linear growth in core group giving and an unchanging annual
                    budget of $100,000:
                  </li>
                </li>
              </ol>
            </li>
          </ol>

          <StyledTable>
            <thead>
              <tr>
                <th></th>
                <th>2024</th>
                <th>2025</th>
                <th>2026</th>
                <th>2027</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internal Sources</td>
                <td>$30,000</td>
                <td>$40,000</td>
                <td>$50,000</td>
                <td>$60,000</td>
                <td>$180,000</td>
              </tr>
              <tr>
                <td>Grant Funds</td>
                <td>$56,000</td>
                <td>$36,000</td>
                <td>$20,000</td>
                <td>$8,000</td>
                <td>$120,000</td>
              </tr>
              <tr>
                <td>External Sources</td>
                <td>$14,000</td>
                <td>$24,000</td>
                <td>$30,000</td>
                <td>$32,000</td>
                <td>$100,000</td>
              </tr>
              <tr>
                <td>Total Budget</td>
                <td>$100,000</td>
                <td>$100,000</td>
                <td>$100,000</td>
                <td>$100,000</td>
                <td>$400,000</td>
              </tr>
            </tbody>
          </StyledTable>

          <ol type="1">
            <li>
              Outstanding need may or may not decrease over the four year
              period. Regardless, the plant will need to secure a greater
              portion of its external funding from other sources as time goes
              on.
            </li>
            <li>
              Plants may or may not be fully self-funded after four full years
              of Classical support. However, they will ordinarily at that time
              be expected to secure their external support from other sources.
            </li>
          </ol>
        </section>

        {/* End of guidelines section */}
        <p style={{ opacity: 0, position: 'absolute', width: 0, height: 0 }}>
          The Classical Committee on Home Missions (PNW) plants churches in
          Northern California, Central Valley California, The Bay Area and
          Walnut Creek in California, Oregon, Washington, Idaho and Montana.
        </p>
      </Section>
    </Layout>
  )
}

// Styled table for guidelines
const StyledTable = styled.table`
  width: 100%;
  margin: 2rem;
  border-collapse: separate;
  border-spacing: 0;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;

  th {
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 0.25em;
  }

  th:first-child,
  td:first-child {
    font-weight: 600;
  }

  th:not(:first-child),
  td:not(:first-child) {
    text-align: right;
  }

  td {
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 0.5em;
  }
`

export default DesireToPlantPage

export const Head = () => <SEO pageTitle="Desire to Plant?" />

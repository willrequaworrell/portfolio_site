interface RoleType {
  roleName: string
  startDate: string
  endDate: string
  descriptionBullets: string[]
}

export interface companySectionType {
  company: string
  roles: RoleType[]
}


export const companySections: companySectionType[] = [
    {
      company: "Finderly",
      roles: [
        {
          roleName: "Software Engineer (Part Time)",
          startDate: "Sep '25",
          endDate: "Present",
          descriptionBullets: [
            "Built text & live video AI Agent using Vercel AI SDK & LiveKit for users to plan, track and complete DIY projects.",
            "Refactored monolithic legacy pages into reusable React components & setup Jest test suite across full stack.",
            "Migrated Node.js backend from JavaScript to TypeScript, enforcing strict typing across shared API contracts."
          ]
        }
      ]
    },
    {
      company: "L3Harris Technologies",
      roles: [
        {
          roleName: "Technical Project Manager (Robotic Process Automation)",
          startDate: "Aug '23",
          endDate: "Present",
          descriptionBullets: [
            "Developed AI enabled PM tooling to automatically generate documentation, reducing project prep time by 60%.",
            "Managed deliverables as technical liaison on projects serving 45k employees, generating $300k+ annual savings.",
            "Deployed & monitored Blue Prism bot processes and application servers across dev, test and prod environments."
          ]
        },
        {
          roleName: "Business Analyst",
          startDate: "Nov '21",
          endDate: "Aug '23",
          descriptionBullets: [
            "Owned $1.5 million per year in contract initiations & renewals for software procured from 25+ vendors."
          ]
        }
      ]
    },
    {
      company: "Strategic Retirement Partners",
      roles: [
        {
          roleName: "Software Engineer (Freelance)",
          startDate: "Apr '24",
          endDate: "Oct '24",
          descriptionBullets: [
            "Shipped a responsive 401k data projection/visualization web app using TypeScript, React, and Material UI.",
            "Enabled advisors to deliver accessible, personalized retirement insights that increased client participation 10%.",
            "Designed accessible form flow and interactive charts built with TypeScript, React, Material UI & Tailwind CSS."
          ]
        }
      ]
    },
    {
      company: "501Database",
      roles: [
        {
          roleName: "Software Engineer Intern",
          startDate: "Apr '23",
          endDate: "Aug '23",
          descriptionBullets: [
            "Owned customer intake flow & admin tool in Next.js used by 20+ non-profits for 20% faster sign-in experience.",
            "Integrated the frontend with two RESTful backend microservices, enabling dynamic user-specific form field generation and seamless data submission."
          ]
        }
      ]
    },
    {
      company: "Euclid Financial Services",
      roles: [
        {
          roleName: "IT Intern",
          startDate: "Jun '20",
          endDate: "Aug '20",
          descriptionBullets: [
            "Automated data input streams to Salesforce and configured integration with other business platforms.",
            "Improved lead generation and analytics data through platform synchronization."
          ]
        }
      ]
    }
  ];
  

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
      company: "L3Harris Technologies",
      roles: [
        {
          roleName: "Project Manager",
          startDate: "Aug '23",
          endDate: "Present",
          descriptionBullets: [
            "Managed process automation projects serving 45k employees, generating $250k+ in annual savings.",
            "Led meetings, managed deliverables & served as technical liaison between developers and stakeholders.",
            "Deployed & monitored automation processes and servers across dev, test and prod environments."
          ]
        },
        {
          roleName: "IT Business Analyst",
          startDate: "Nov '21",
          endDate: "Aug '23",
          descriptionBullets: [
            "Owned $1.5 million per year in contract initiations & renewals for software procured from 25+ vendors.",
            "Managed software utilization audits in ServiceNow to right-size contract renewals for maximum savings.",
            "Nurtured strategic partnerships with supply chain, procurement and external software vendors."
          ]
        }
      ]
    },
    {
      company: "GPS Investment Advisors",
      roles: [
        {
          roleName: "Software Engineer (Freelance)",
          startDate: "Apr '24",
          endDate: "Oct '24",
          descriptionBullets: [
            "Designed and built a TypeScript & React application to model dynamic client data for 401k projections.",
            "Developed elegant form input flow and data visualization dashboard using Material Ul and Tailwind CSS."
          ]
        }
      ]
    },
    {
      company: "501Database",
      roles: [
        {
          roleName: "Frontend Software Engineer Intern",
          startDate: "Apr '23",
          endDate: "Aug '23",
          descriptionBullets: [
            "Developed and tested Next.js application for CRM startup utilized by 20+ local non-profit organizations.",
            "Designed/Implemented multi-page customer intake flow & corresponding admin configuration tools."
          ]
        }
      ]
    }
  ];
  

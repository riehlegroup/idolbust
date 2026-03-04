import React from "react";

import type { TeamMember } from "@/data-models/about";

export interface TeamProps {
  members: TeamMember[];
  title?: string;
}

export const Team = ({ members, title = "Our Team" }: TeamProps) => (
  <section className="py-12">
    <h2 className="mb-8 text-center text-2xl font-bold text-secondary-900">
      {title}
    </h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((member) => (
        <div
          key={member.name}
          className="flex flex-col items-center rounded-lg bg-secondary-50 p-6 text-center"
        >
          <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-secondary-200">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-secondary-500">
                {member.name.charAt(0)}
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-secondary-900">
            {member.name}
          </h3>
          <p className="text-sm text-primary-600">{member.role}</p>
          {member.bio && (
            <p className="mt-2 text-sm text-secondary-600">{member.bio}</p>
          )}
        </div>
      ))}
    </div>
  </section>
);

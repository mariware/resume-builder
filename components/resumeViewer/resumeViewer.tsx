"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Link,
} from "@react-pdf/renderer";
import { ResumeData } from "@/models/types";

function ResumeDocument({ resumeData }: { resumeData: ResumeData }) {
  return (
    <Document>
      <Page size="A4" style={{ padding: "35", fontSize: "10" }}>
        <View style={{ gap: "4", paddingBottom: "8" }}>
          <Text style={{ fontWeight: "700", fontSize: "18" }}>
            {resumeData.profile.name}
          </Text>
          <Text>{resumeData.profile.profession}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: "64",
            borderBottom: "gray",
            borderBottomWidth: "1",
            paddingBottom: "12",
          }}
        >
          <View style={{ gap: "4" }}>
            <Text>{resumeData.profile.email}</Text>
            <Text>{resumeData.profile.phoneNumber}</Text>
          </View>
          <View style={{ gap: "4" }}>
            <Text>
              {resumeData.profile.linkedin && (
                <Link
                  src={`https://linkedin.com/in/${resumeData.profile.linkedin}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  linkedin.com/in/{resumeData.profile.linkedin}
                </Link>
              )}
            </Text>
            <Text>
              {resumeData.profile.portfolio && (
                <Link
                  src={resumeData.profile.portfolio}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {resumeData.profile.portfolio}
                </Link>
              )}
            </Text>
          </View>
        </View>
        {resumeData.profile.description && (
          <View
            style={{
              borderBottom: "gray",
              borderBottomWidth: "1",
              paddingTop: "12",
              paddingBottom: "12",
              gap: "8",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: "14" }}>
              Introduction
            </Text>
            <Text>{resumeData.profile.description}</Text>
          </View>
        )}
        <View style={{ flexDirection: "row", gap: "12" }}>
          <View style={{ flex: "1", paddingTop: "12", gap: "12" }}>
            {resumeData.education.length && (
              <Text style={{ fontWeight: "700", fontSize: "14" }}>
                Education
              </Text>
            )}
            {resumeData.education.map((edu, index) => (
              <View style={{ gap: "4" }} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "700" }}>{edu.degree}</Text>
                  <Text style={{ color: "gray" }}>
                    {edu.schoolStartDate}
                    {edu.schoolStartDate && edu.schoolEndDate && " - "}
                    {edu.schoolEndDate}
                  </Text>
                </View>
                <Text>{edu.school}</Text>
                <Text>{edu.schoolLocation}</Text>
              </View>
            ))}
            {resumeData.work.length && (
              <Text style={{ fontWeight: "700", fontSize: "14" }}>
                Experience
              </Text>
            )}
            {resumeData.work.map((work, index) => (
              <View style={{ gap: "4" }} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "700" }}>{work.company}</Text>
                  <Text style={{ color: "gray" }}>
                    {work.workStartDate}
                    {work.workStartDate && work.workEndDate && " - "}
                    {work.workEndDate}
                  </Text>
                </View>
                <Text>{work.position}</Text>
                <Text>{work.workDescription}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              width: "200",
              paddingTop: "12",
              paddingLeft: "8",
              gap: "12",
            }}
          >
            {resumeData.skills.length && (
              <Text style={{ fontWeight: "700", fontSize: "14" }}>Skills</Text>
            )}
            {resumeData.skills.map((skill, index) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <Text style={{ fontWeight: "700" }}>{skill.skill}</Text>
                <Text>{skill.proficiency}</Text>
              </View>
            ))}
            {resumeData.languages.length && (
              <Text style={{ fontWeight: "700", fontSize: "14" }}>
                Languages
              </Text>
            )}
            {resumeData.languages.map((lang, index) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <Text style={{ fontWeight: "700" }}>{lang.language}</Text>
                <Text>{lang.proficiency}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function Resume({ resumeData }: { resumeData: ResumeData }) {
  const [isClient, setIsClient] = useState(false);
  const count = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <></>;
  }

  return (
    <div className="h-[90%] w-full flex items-center justify-center border-2 border-sky-500  bg-stone-900">
      <PDFViewer
        style={{ height: "100%", width: "100%" }}
        showToolbar={true}
        key={count.current++}
      >
        <ResumeDocument resumeData={resumeData} />
      </PDFViewer>
    </div>
  );
}

export { Resume };

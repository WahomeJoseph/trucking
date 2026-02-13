"use client";

import { useState } from "react";
import { CheckCircle, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WavyBg } from "@/components/wavy-bg";


export default function GetQuotePage() {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cargoType: "",
    budget: "",
    urgency: "",
    skills: "",
    company: "",
    country: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[70vh] overflow-hidden bg-white">

        <div className="relative h-[480px] md:h-[520px] lg:h-[480px] w-full overflow-hidden">
          {/* Wavy Background */}
          <div className="absolute inset-0 z-0">
            <WavyBg />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto pxp-4 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="pb-2 border-b-2 border-accent inline-block">Request</span> {" "} a Quote
              </h1>

              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Professional logistics solutions across Africa. Get competitive pricing for your freight transportation needs with our reliable trucking services.
              </p>

              <div className="w-24 h-1 bg-muted-foreground mx-auto mt-8"></div>
            </div>
          </div>
        </div>

        {/* Form Container - Sitting on the wave */}
        <div className="relative z-20 container mx-auto px-4 -mt-32 md:-mt-34">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Column */}
                  <div className="p-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipment Information</h3>

                        <div className="grid gap-6">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-3">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent bg-gray-50 transition-all duration-200"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+254 ___ ___ ___"
                                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                              />
                            </div>

                            <div>
                              <label htmlFor="cargoType" className="block text-sm font-semibold text-gray-700 mb-3">
                                Cargo Type
                              </label>
                              <select
                                id="cargoType"
                                name="cargoType"
                                required
                                value={formData.cargoType}
                                onChange={handleChange}
                                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                              >
                                <option value="">Select Cargo Type</option>
                                <option value="general-merchandise">General Merchandise</option>
                                <option value="perishable-goods">Perishable Goods</option>
                                <option value="hazardous-materials">Hazardous Materials</option>
                                <option value="oversize-load">Oversized Load</option>
                                <option value="fragile-items">Fragile Items</option>
                                <option value="construction-material">Construction Materials</option>
                                <option value="agricultural-products">Agricultural Products</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-3">
                              Delivery Urgency
                            </label>
                            <select
                              id="urgency"
                              name="urgency"
                              required
                              value={formData.urgency}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                            >
                              <option value="">Select Delivery Urgency</option>
                              <option value="standard">Standard (5-7 days)</option>
                              <option value="express">Express (2-3 days)</option>
                              <option value="urgent">Urgent (24 hours)</option>
                              <option value="scheduled">Scheduled Delivery</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-3">
                              Approximate Cargo Weight (kg or tons)
                            </label>
                            <input
                              type="text"
                              id="skills"
                              name="skills"
                              required
                              value={formData.skills}
                              onChange={handleChange}
                              placeholder="e.g., React, Node.js, Python, etc."
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                            />
                          </div>

                          {/* File Upload */}
                          <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-800">
                              Shipping Documents
                            </label>
                            <div
                              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer group ${dragOver
                                ? 'border-primary-400 bg-primary-50'
                                : uploadedFile
                                  ? 'border-green-300 bg-green-50'
                                  : 'border-gray-300 bg-gray-50 hover:border-primary-300 hover:bg-primary-50'
                                }`}
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={() => document.getElementById('file-upload')?.click()}
                            >
                              <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                onChange={handleFileSelect}
                                accept=".pdf,.doc,.xlsx,.docx,.txt,.zip,.png,.jpg,.jpeg"
                              />

                              {uploadedFile ? (
                                <div className="space-y-3">
                                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                                  <div>
                                    <p className="text-green-700 font-semibold">File uploaded successfully!</p>
                                    <p className="text-green-600 text-sm">{uploadedFile}</p>
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  <Upload className={`w-12 h-12 mx-auto transition-colors duration-200 ${dragOver ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                                    }`} />
                                  <div>
                                    <p className="text-gray-700 font-medium">
                                      Drop files here or click to browse
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                      PDF, DOCX, XLSX, TXT, PNG, JPEG, JPG up to 10MB
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                              Special Requirements
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Any special handling, delivery instructions, or additional requirements..."
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 transition-all duration-200 resize-none"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="p-12 bg-gray-50">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>

                        <div className="grid gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your.email@example.com"
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition-all duration-200"
                            />
                          </div>

                          <div>
                            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-3">
                              Cargo Value ($ or local currency)
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              required
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition-all duration-200"
                            >
                              <option value="">Select Cargo Value</option>
                              <option value="5k-10k">$5,000 - $10,000</option>
                              <option value="10k-25k">$10,000 - $25,000</option>
                              <option value="25k-50k">$25,000 - $50,000</option>
                              <option value="50k-100k">$50,000 - $100,000</option>
                              <option value="100k+">$100,000+</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition-all duration-200"
                            />
                          </div>

                          <div>
                            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-3">
                              Destination Country
                            </label>
                            <select
                              id="country"
                              name="country"
                              required
                              value={formData.country}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition-all duration-200"
                            >
                              <option value="">Select Country</option>

                              <optgroup label="East Africa">
                                <option value="kenya">Kenya</option>
                                <option value="tanzania">Tanzania</option>
                                <option value="uganda">Uganda</option>
                                <option value="rwanda">Rwanda</option>
                                <option value="burundi">Burundi</option>
                                <option value="ethiopia">Ethiopia</option>
                                <option value="somalia">Somalia</option>
                                <option value="djibouti">Djibouti</option>
                                <option value="eritrea">Eritrea</option>
                                <option value="south-sudan">South Sudan</option>
                                <option value="sudan">Sudan</option>
                              </optgroup>

                              <optgroup label="West Africa">
                                <option value="nigeria">Nigeria</option>
                                <option value="ghana">Ghana</option>
                                <option value="cote-divoire">Côte d'Ivoire</option>
                                <option value="senegal">Senegal</option>
                                <option value="mali">Mali</option>
                                <option value="burkina-faso">Burkina Faso</option>
                                <option value="niger">Niger</option>
                                <option value="guinea">Guinea</option>
                                <option value="benin">Benin</option>
                                <option value="togo">Togo</option>
                                <option value="sierra-leone">Sierra Leone</option>
                                <option value="liberia">Liberia</option>
                                <option value="mauritania">Mauritania</option>
                                <option value="gambia">Gambia</option>
                                <option value="guinea-bissau">Guinea-Bissau</option>
                                <option value="cape-verde">Cape Verde</option>
                              </optgroup>

                              <optgroup label="Central Africa">
                                <option value="dr-congo">DR Congo</option>
                                <option value="cameroon">Cameroon</option>
                                <option value="chad">Chad</option>
                                <option value="central-african-republic">Central African Republic</option>
                                <option value="congo">Congo</option>
                                <option value="gabon">Gabon</option>
                                <option value="equatorial-guinea">Equatorial Guinea</option>
                                <option value="sao-tome-and-principe">São Tomé and Príncipe</option>
                              </optgroup>

                              <optgroup label="Southern Africa">
                                <option value="south-africa">South Africa</option>
                                <option value="angola">Angola</option>
                                <option value="zambia">Zambia</option>
                                <option value="zimbabwe">Zimbabwe</option>
                                <option value="malawi">Malawi</option>
                                <option value="mozambique">Mozambique</option>
                                <option value="namibia">Namibia</option>
                                <option value="botswana">Botswana</option>
                                <option value="lesotho">Lesotho</option>
                                <option value="eswatini">Eswatini</option>
                                <option value="madagascar">Madagascar</option>
                                <option value="mauritius">Mauritius</option>
                                <option value="seychelles">Seychelles</option>
                                <option value="comoros">Comoros</option>
                              </optgroup>

                              <optgroup label="North Africa">
                                <option value="egypt">Egypt</option>
                                <option value="algeria">Algeria</option>
                                <option value="morocco">Morocco</option>
                                <option value="tunisia">Tunisia</option>
                                <option value="libya">Libya</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-700 py-8 cursor-pointer text-white text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg mt-6"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Request Shipping Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* White space below */}
      <div className="py-20 bg-white"></div>
    </div>
  );
}

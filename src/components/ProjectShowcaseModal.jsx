import React, { useState, useEffect } from 'react';
import { ShoppingBag, Terminal as TermIcon, Home as HomeIcon, Activity, Check, Play, AlertTriangle, Send, Code, Database, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectShowcaseModal({ project, viewMode, onClose }) {
  const [activeTab, setActiveTab] = useState(viewMode);

  // E-commerce states
  const [paymentStep, setPaymentStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('Standard (Free)');
  const [cardNumber, setCardNumber] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // AI Agent states
  const [agentStep, setAgentStep] = useState(0);
  const [selectedTask, setSelectedTask] = useState('Create Auth Middleware');
  const [agentLogs, setAgentLogs] = useState([]);

  // Roomify states
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomFilter, setRoomFilter] = useState('All');
  const rooms = [
    { id: 1, name: 'Glass Mountain Loft', price: '$120/night', loc: 'Cascade Range, WA', type: 'Cabin', img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Minimalist Studio Suite', price: '$85/night', loc: 'Seattle, WA', type: 'Studio', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Industrial Cobalt Loft', price: '$210/night', loc: 'Brooklyn, NY', type: 'Loft', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80' },
  ];

  // IoT variables
  const [turbineSpeed, setTurbineSpeed] = useState(72);
  const [powerYield, setPowerYield] = useState(254);
  const [tempAlert, setTempAlert] = useState(false);
  const [iotStatus, setIotStatus] = useState('Healthy');

  // Triggering simulated AI Agent steps
  const runAIAgents = () => {
    setAgentStep(1);
    setAgentLogs(['[Architect] Initiating dependency audit...', '[Architect] Design structure generated: JWT validation + rate limit guard.']);
    
    setTimeout(() => {
      setAgentStep(2);
      setAgentLogs(prev => [...prev, '[Dev_Core] Drafting route parameters...', '[Dev_Core] Code injected successfully. Binding JWT payload schema...']);
    }, 1500);

    setTimeout(() => {
      setAgentStep(3);
      setAgentLogs(prev => [...prev, '[AI_Tester] Simulating authorization mock headers...', '[AI_Tester] Status code returned: 200 OK.', '[AI_Tester] Unit tests passing successfully!']);
    }, 3000);

    setTimeout(() => {
      setAgentStep(4);
      setAgentLogs(prev => [...prev, '[Success] Component bundle ready for push to main branches.']);
    }, 4500);
  };

  const codeSnippets = {
    'mern': `// Express API Endpoint: Secure Stripe Checkout Session Init
import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY || '');

router.post('/api/checkout/session', async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;
    
    // Create Stripe Session
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Cents conversion
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: \`\${process.env.APP_URL}/success?id={CHECKOUT_SESSION_ID}\`,
      cancel_url: \`\${process.env.APP_URL}/cart\`,
    });

    res.status(200).json({ sessionId: session.id, redirectUrl: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;`,
    'agents': `// Socket.io Collaboration Controller for Multiple Virtual AI Agents
import { Server } from 'socket.io';

export function setupAgentSockets(io) {
  io.on('connection', (socket) => {
    socket.on('agent:initiate_task', async ({ taskId, instructions }) => {
      // 1. Trigger Architect Agent to define architecture
      socket.emit('agent:update', { agent: 'architect', status: 'thinking' });
      const bluePrint = await talkToArchitect(instructions);
      socket.emit('agent:update', { agent: 'architect', status: 'done', data: bluePrint });

      // 2. Trigger Developer Agent to implement code
      socket.emit('agent:update', { agent: 'developer', status: 'writing' });
      const completedCode = await talkToDev(bluePrint);
      socket.emit('agent:update', { agent: 'developer', status: 'done', data: completedCode });

      // 3. Trigger QA Tester Agent to lint/test code
      socket.emit('agent:update', { agent: 'tester', status: 'validating' });
      const testReport = await runSyntaxTests(completedCode);
      socket.emit('agent:update', { agent: 'tester', status: 'done', report: testReport });
    });
  });
}`,
    'roomify': `// React Native + Mapbox Room Pin Finder Component
import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('YOUR_MAPBOX_PUB_TOKEN');

export default function RoomFinderMap({ rooms, onSelect }) {
  return (
    <MapboxGL.MapView style={{ flex: 1 }}>
      <MapboxGL.Camera zoomLevel={13} centerCoordinate={[-122.332, 47.606]} />
      
      {rooms.map((room) => (
        <MapboxGL.PointAnnotation
          key={room.id}
          id={\`pin-\${room.id}\`}
          coordinate={room.coordinates}
          onSelected={() => onSelect(room)}
        >
          <div style={{ padding: 4, backgroundColor: '#4d8eff', borderRadius: 20 }}>
            <span style={{ fontSize: 10, color: '#fff', fontWeight: 'bold' }}>
              \${room.price}
            </span>
          </div>
        </MapboxGL.PointAnnotation>
      ))}
    </MapboxGL.MapView>
  );
}`,
    'kensi': `// D3.js Microgrid Live Telemetry Stream Visualizer
import * as d3 from 'd3';

export function drawTelemetryChart(containerId, telemetryData) {
  const margin = { top: 20, right: 30, bottom: 40, left: 50 };
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Clear previous SVG
  d3.select(\`#\${containerId}\`).selectAll('*').remove();

  const svg = d3.select(\`#\${containerId}\`)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

  const x = d3.scaleTime().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);

  const line = d3.line()
    .x(d => x(new Date(d.timestamp)))
    .y(d => y(d.value))
    .curve(d3.curveMonotoneX);

  x.domain(d3.extent(telemetryData, d => new Date(d.timestamp)));
  y.domain([0, d3.max(telemetryData, d => d.value) * 1.2]);

  // Gradient definitions & line transitions
  svg.append('path')
    .datum(telemetryData)
    .attr('fill', 'none')
    .attr('stroke', '#4d8eff')
    .attr('stroke-width', 2.5)
    .attr('d', line);
}`
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border max-h-[85vh] flex flex-col">
        
        {/* Header Tab Navigator */}
        <div className="flex justify-between items-center bg-surface-muted px-6 py-4 border-b border-border-light shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 p-2 rounded-lg bg-indigo-50/70 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50">
              {project.id === 'mern' && <ShoppingBag className="h-5 w-5" />}
              {project.id === 'agents' && <TermIcon className="h-5 w-5" />}
              {project.id === 'roomify' && <HomeIcon className="h-5 w-5" />}
              {project.id === 'kensi' && <Activity className="h-5 w-5" />}
            </span>
            <div>
              <h3 className="font-sans font-extrabold text-text leading-none">{project.title}</h3>
              <p className="text-[10px] uppercase font-sans font-bold text-text-muted tracking-wider mt-1">{project.tags.join(' // ')}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1.5 rounded-lg font-sans font-bold text-xs uppercase cursor-pointer ${
                activeTab === 'demo' ? 'bg-indigo-600 text-white' : 'text-text-secondary hover:text-text font-semibold'
              }`}
            >
              Live Playground
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg font-sans font-bold text-xs uppercase cursor-pointer ${
                activeTab === 'code' ? 'bg-indigo-600 text-white' : 'text-text-secondary hover:text-text font-semibold'
              }`}
            >
              Source Blueprint
            </button>
            <button 
              onClick={onClose}
              className="text-text-secondary hover:text-text font-sans font-bold text-xs uppercase px-2 py-1 bg-surface-hover rounded hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

        {/* Modal Scaffold Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1 bg-surface">
          {activeTab === 'demo' ? (
            <div>
              {/* project specifics */}

              {/* 1. MERN DEMO IMPLEMENTATION */}
              {project.id === 'mern' && (
                <div className="max-w-xl mx-auto bg-surface-muted rounded-xl p-6 border border-border">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <span className="font-sans text-sm font-semibold text-text">Interactive Stripe Terminal Checkout</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">● STRIPE SANDBOX ACTIVE</span>
                  </div>

                  {paymentStep === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-border">
                        <img 
                          alt="Tech gadget sample" 
                          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=150&q=80" 
                          className="w-16 h-16 rounded object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-text">Quantum Gaming Headset V2</h4>
                          <p className="text-xs text-text-secondary font-sans font-bold">$149.99 USD</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs uppercase font-sans tracking-wide text-text-secondary font-bold block">Delivery Speed</span>
                        {['Standard (Free)', 'Next-Day Express (+$15.00)'].map((method) => (
                          <label key={method} className="flex items-center justify-between bg-surface px-4 py-3 rounded-lg border border-border hover:border-indigo-300 dark:hover:border-indigo-700 cursor-pointer">
                            <span className="text-xs text-text-secondary flex items-center gap-2 font-medium">
                              <input 
                                type="radio" 
                                name="shipping" 
                                checked={shippingMethod === method} 
                                onChange={() => setShippingMethod(method)}
                              />
                              {method}
                            </span>
                          </label>
                        ))}
                      </div>

                      <button 
                        onClick={() => setPaymentStep(2)}
                        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm active:scale-95 transition-all cursor-pointer hover:bg-indigo-700 duration-300"
                      >
                        Proceed to Secure Checkout
                      </button>
                    </div>
                  )}

                  {paymentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-xs uppercase font-sans tracking-wide text-text-secondary font-bold block">Card Details (Simulated Sandbox)</label>
                        <input 
                          type="text" 
                          placeholder="4242 •••• •••• 4242" 
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text focus:ring-1 focus:ring-indigo-600 outline-none font-semibold"
                        />
                        <p className="text-[10px] text-text-muted mt-1.5 font-sans">Type any number, security validations integrated.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs uppercase font-sans tracking-wide text-text-secondary font-bold block mb-1">Expiry</label>
                          <input type="text" placeholder="12/28" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text font-semibold" />
                        </div>
                        <div>
                          <label className="text-xs uppercase font-sans tracking-wide text-text-secondary font-bold block mb-1">CVC</label>
                          <input type="text" placeholder="565" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text font-semibold" />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          onClick={() => setPaymentStep(1)}
                          className="px-6 py-3 border border-border bg-surface hover:bg-surface-muted rounded-xl text-text text-xs font-semibold"
                        >
                          Back
                        </button>
                        <button 
                          onClick={() => {
                            setIsProcessingPayment(true);
                            setTimeout(() => {
                              setIsProcessingPayment(false);
                              setPaymentStep(3);
                            }, 2000);
                          }}
                          disabled={isProcessingPayment}
                          className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 duration-300"
                        >
                          {isProcessingPayment ? 'Processing Gateway Webhook...' : 'Authorized Payment via Stripe'}
                        </button>
                      </div>
                    </div>
                  )}

                  {paymentStep === 3 && (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-250 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                        <Check className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-text">Receipt Simulated!</h4>
                      <p className="text-xs text-text-secondary max-w-sm mx-auto font-medium">
                        Your secure checkout has finalized successfully. The database was dynamically adjusted via Stripe Webhook simulation payloads.
                      </p>
                      <button 
                        onClick={() => {
                          setPaymentStep(1);
                          setCardNumber('');
                        }}
                        className="px-4 py-2 bg-surface-hover hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs text-indigo-600 dark:text-indigo-400 font-sans font-bold cursor-pointer"
                      >
                        Reset Gateway Test
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* 2. AI AGENTS DEMO */}
              {project.id === 'agents' && (
                <div className="max-w-xl mx-auto bg-surface-muted rounded-xl p-6 border border-border">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <span className="font-sans text-xs font-bold text-text">Consoles of Three Autonomous AI Agents</span>
                    <span className="text-purple-700 dark:text-purple-300 text-xs font-bold uppercase bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 px-2.5 py-0.5 rounded-full">WebSocket Connected</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-sans tracking-wide text-text-secondary font-bold block">Selected Instruction Template</label>
                      <select 
                        value={selectedTask}
                        onChange={(e) => setSelectedTask(e.target.value)}
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text-secondary font-semibold cursor-pointer"
                      >
                        <option>Create Auth Middleware</option>
                        <option>Optimize PG SQL Relational Query</option>
                        <option>Draft unit tests with Mock Server</option>
                      </select>
                    </div>

                    <button 
                      onClick={runAIAgents}
                      disabled={agentStep > 0 && agentStep < 4}
                      className="w-full py-3 bg-purple-600 text-white font-sans font-extrabold uppercase text-xs tracking-wider rounded-xl active:scale-95 transition-all duration-300 shadow-sm hover:bg-purple-700 scroll-smooth cursor-pointer"
                    >
                      {agentStep === 0 && 'Deploy Collaborative Agents'}
                      {agentStep > 0 && agentStep < 4 && 'Running multi-agent feedback loop...'}
                      {agentStep === 4 && 'All Agent Executions Completed'}
                    </button>

                    {/* Terminal Window Logs */}
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-4 border border-slate-800 dark:border-slate-700 font-mono text-[11px] leading-relaxed min-h-[160px] text-emerald-400">
                      <div className="flex gap-1.5 mb-2 border-b border-slate-800 dark:border-slate-700 pb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="ml-2 text-xs text-text-secondary">agent-stream // websocket</span>
                      </div>

                      {agentStep === 0 && (
                        <div className="text-text-secondary italic">
                          Click "Deploy Collaborative Agents" to initiate terminal output.
                        </div>
                      )}

                      {agentLogs.map((log, lIdx) => (
                        <div key={lIdx} className="space-y-1">
                          {log}
                        </div>
                      ))}

                      {agentStep === 4 && (
                        <div className="text-white mt-4 font-sans font-bold max-w-sm">
                          🎯 Output Bundle Saved! Successfully compiled and processed instructions in sandbox branches.
                        </div>
                      )}
                    </div>

                    {agentStep === 4 && (
                      <button 
                        onClick={() => {
                          setAgentStep(0);
                          setAgentLogs([]);
                        }}
                        className="px-4 py-2 border border-border hover:bg-surface-hover dark:hover:bg-slate-700 rounded-xl text-xs font-sans font-bold text-purple-600 dark:text-purple-400 bg-surface"
                      >
                        Reset Sockets
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* 3. ROOMIFY DEMO */}
              {project.id === 'roomify' && (
                <div className="max-w-xl mx-auto bg-surface-muted rounded-xl p-6 border border-border">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <span className="font-sans text-sm font-semibold text-text">Map Filter: Room Explorer</span>
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase">MAPBOX ACCESS ACTIVE</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-2">
                      {['All', 'Cabin', 'Loft', 'Studio'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setRoomFilter(filter)}
                          className={`px-3 py-1 rounded-full text-xs font-sans transition-all uppercase font-bold ${
                            roomFilter === filter ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200' : 'bg-surface border border-border text-text-secondary hover:text-text'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {rooms
                        .filter(r => roomFilter === 'All' || r.type === roomFilter)
                        .map((room) => (
                          <div 
                            key={room.id}
                            onClick={() => setSelectedRoom(room.id)}
                            className={`bg-surface p-3 rounded-xl border cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 relative ${
                              selectedRoom === room.id ? 'border-indigo-600 bg-indigo-50/20' : 'border-border'
                            }`}
                          >
                            <img 
                              alt={room.name} 
                              src={room.img} 
                              className="w-full h-24 object-cover rounded-lg mb-3" 
                              referrerPolicy="no-referrer"
                            />
                            <h5 className="text-xs font-extrabold text-text leading-tight">{room.name}</h5>
                            <p className="text-[10px] text-text-muted font-sans font-semibold mt-1">{room.loc}</p>
                            <div className="flex justify-between items-center mt-2 pt-2 border-t border-border-light">
                              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{room.price}</span>
                              <span className="text-[9px] uppercase font-sans font-bold px-1.5 py-0.5 rounded bg-surface-hover text-text-secondary">{room.type}</span>
                            </div>
                          </div>
                      ))}
                    </div>

                    <AnimatePresence>
                      {selectedRoom && (
                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl text-center space-y-2">
                          <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mx-auto" />
                          <h6 className="text-xs font-bold text-text">
                            Booking request parsed!
                          </h6>
                          <p className="text-[11px] text-text-secondary font-medium">
                            Express Server and Mapbox router parsed a query route coordinates parameter block successfully. Connection validated.
                          </p>
                          <button 
                            onClick={() => setSelectedRoom(null)}
                            className="px-3 py-1 bg-surface-hover border border-border hover:bg-slate-200 dark:hover:bg-slate-700 rounded font-sans font-bold text-[9px] text-emerald-700 dark:text-emerald-300 mt-2 cursor-pointer"
                          >
                            Close Overlay
                          </button>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* 4. KENSI CONTROLS */}
              {project.id === 'kensi' && (
                <div className="max-w-xl mx-auto bg-surface-muted rounded-xl p-6 border border-border">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <span className="font-sans text-xs font-bold text-text">IoT Microgrid Telemetry</span>
                    <span className="text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded">Streaming live telemetry</span>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface p-4 rounded-xl text-center border border-border shadow-sm">
                        <span className="text-[9px] uppercase tracking-wider font-sans text-text-muted block mb-1">Grid Turbine Speed</span>
                        <div className="text-3xl font-bold font-sans text-indigo-600 dark:text-indigo-400">{turbineSpeed} RPM</div>
                        <p className="text-[10px] text-text-muted mt-1 font-semibold">Normal target range: 60-80</p>
                      </div>
                      <div className="bg-surface p-4 rounded-xl text-center border border-border shadow-sm">
                        <span className="text-[9px] uppercase tracking-wider font-sans text-text-muted block mb-1">Instant Power Yield</span>
                        <div className="text-3xl font-bold font-sans text-emerald-600 dark:text-emerald-400">{powerYield} MWh</div>
                        <p className="text-[10px] text-text-muted mt-1 font-semibold">Grid feed: 100% active</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-sans text-text-secondary font-bold">Simulate Power Strain Trigger</span>
                        <span className={`text-[10px] font-sans uppercase font-bold px-2 py-0.5 rounded ${
                          tempAlert ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50 animate-pulse' : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                        }`}>{iotStatus}</span>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            setTurbineSpeed(105);
                            setPowerYield(412);
                            setTempAlert(true);
                            setIotStatus('Overheated Grid Trigger');
                          }}
                          className="flex-1 py-3 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 border border-red-200 dark:border-red-800/50 font-sans text-xs font-extrabold text-red-700 dark:text-red-400 rounded-xl active:scale-95 transition-all cursor-pointer"
                        >
                          Trigger Overheat Strain
                        </button>

                        <button
                          onClick={() => {
                            setTurbineSpeed(72);
                            setPowerYield(254);
                            setTempAlert(false);
                            setIotStatus('Healthy');
                          }}
                          className="px-6 py-3 border border-border bg-surface hover:bg-surface-muted rounded-xl font-sans text-xs font-bold text-text-secondary cursor-pointer"
                        >
                          Stabilize (Cooling)
                        </button>
                      </div>
                    </div>

                    {/* SVG mini chart representation of heat telemetry */}
                    <div className="bg-surface border border-border p-4 rounded-xl h-24 flex items-end justify-between font-sans text-[9px] relative overflow-hidden shadow-inner">
                      <div className="absolute top-2 left-2 text-text-muted font-sans font-bold text-[9px]">Live Power Strain Trend line</div>
                      
                      {/* Interactive block layout simulating responsive canvas nodes */}
                      <div className="w-1/12 bg-indigo-100 dark:bg-indigo-900/30 h-8 rounded-t" />
                      <div className="w-1/12 bg-indigo-100 dark:bg-indigo-900/30 h-10 rounded-t" />
                      <div className="w-1/12 bg-indigo-200 dark:bg-indigo-800 h-12 rounded-t" />
                      <div className="w-1/12 bg-indigo-200 dark:bg-indigo-800 h-14 rounded-t" />
                      <div className="w-1/12 bg-purple-100 dark:bg-purple-900/30 h-16 rounded-t" />
                      <div className="w-1/12 bg-purple-200 dark:bg-purple-800 h-12 rounded-t" />
                      <div className={`w-1/12 transition-all ${tempAlert ? 'bg-red-400 h-24' : 'bg-purple-200 dark:bg-purple-800 h-16'} rounded-t`} />
                      <div className={`w-1/12 transition-all ${tempAlert ? 'bg-red-500 h-20' : 'bg-indigo-200 dark:bg-indigo-800 h-12'} rounded-t`} />
                      <div className={`w-1/12 transition-all ${tempAlert ? 'bg-red-600 h-20' : 'bg-indigo-300 h-10'} rounded-t`} />
                      <div className={`w-1/12 transition-all ${tempAlert ? 'bg-red-400 h-16' : 'bg-indigo-100 dark:bg-indigo-900/30 h-8'} rounded-t`} />
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div>
              {/* Blueprints and code */}
              <div className="relative">
                <div className="absolute top-3 right-3 text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 rounded font-sans text-[10px] font-bold">
                  <Code className="h-4 w-4" />
                  JavaScript Engine
                </div>
                
                <h4 className="text-sm font-sans font-extrabold text-text mb-4">Core Service Blueprint Code:</h4>
                <div className="bg-slate-950 dark:bg-slate-900 border border-slate-900 rounded-xl p-5 overflow-auto max-h-[50vh]">
                  <pre className="font-mono text-xs leading-relaxed text-text-muted dark:text-slate-300">
                    <code>
                      {codeSnippets[project.id]}
                    </code>
                  </pre>
                </div>
                <p className="text-xs text-text-secondary mt-3 font-sans leading-relaxed">
                  *This clean and verified boiler is fully functional in Alex's portfolio architectures across Cloud Run micro container branches.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Scaffold Footer */}
        <div className="bg-surface-muted px-6 py-4 border-t border-border flex justify-between items-center shrink-0">
          <span className="text-xs text-text-secondary font-sans font-medium">Designed dynamically for high-fidelity portfolio presentation</span>
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-xs rounded-xl active:scale-95 transition-all cursor-pointer"
          >
            Acknowledge Sandbox
          </button>
        </div>

      </div>
    </div>
  );
}

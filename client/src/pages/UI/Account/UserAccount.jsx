import { useState } from "react";
import {
  User,
  ShoppingBag,
  MessageSquare,
  Settings,
  Bell,
  Lock,
  ChevronRight,
  Send,
} from "lucide-react";

export default function UserAccount() {
  const [activeTab, setActiveTab] = useState("profile");

  // Sidebar navigation options
  const navItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-zinc-100 mb-8">
          Account <span className="text-amber-400">Dashboard</span>
        </h1>

        {/* Layout Grid: Left Sidebar + Right Content View */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 backdrop-blur-md shadow-xl space-y-2">
              {/* User Mini Card */}
              <div className="flex items-center space-x-3 p-3 mb-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-lg">
                  JD
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-zinc-100">
                    John Doe
                  </h2>
                  <p className="text-xs text-zinc-400">john.doe@example.com</p>
                </div>
              </div>

              {/* Navigation Items */}
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-amber-400 text-zinc-950 font-semibold shadow-lg shadow-amber-400/10"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-zinc-950" : "text-amber-400"}`}
                      />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? "opacity-100" : "opacity-0"}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE CONTENT PANEL */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md shadow-xl min-h-[500px]">
              {activeTab === "profile" && <ProfileTab />}
              {activeTab === "orders" && <OrdersTab />}
              {activeTab === "messages" && <MessagesTab />}
              {activeTab === "settings" && <SettingsTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TAB CONTENT PANELS                                                         */
/* -------------------------------------------------------------------------- */

// 1. Profile Tab Component
function ProfileTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-bold text-zinc-100">
          Personal Profile
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Manage your personal account details and public information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2">
            First Name
          </label>
          <input
            type="text"
            defaultValue="John"
            className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 focus:border-amber-400/50 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 focus:border-amber-400/50 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 focus:border-amber-400/50 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="+1 (555) 000-1234"
            className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 focus:border-amber-400/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800/80 flex justify-end">
        <button className="rounded-xl bg-amber-400 hover:bg-amber-300 px-6 py-2.5 text-xs font-semibold text-zinc-950 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

// 2. Orders Tab Component
function OrdersTab() {
  const orders = [
    {
      id: "#ORD-8921",
      date: "Sep 10, 2026",
      items: "2x Veg Burger, 1x Fries",
      status: "Delivered",
      price: "₹40.00",
    },
    {
      id: "#ORD-8812",
      date: "Sep 04, 2026",
      items: "1x Truffle Pasta",
      status: "In Transit",
      price: "₹32.00",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-bold text-zinc-100">
          Order History
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Review your previous meals and order tracking information.
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-xl bg-zinc-950 border border-zinc-800/80 p-4 flex flex-col sm:flex-row justify-between sm:items-center space-y-3 sm:space-y-0"
          >
            <div>
              <div className="flex items-center space-x-3">
                <span className="font-mono text-sm font-bold text-amber-400">
                  {order.id}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 font-medium">
                  {order.status}
                </span>
              </div>
              <p className="text-xs text-zinc-300 mt-1">{order.items}</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">{order.date}</p>
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              <span className="text-lg font-serif font-bold text-amber-400">
                {order.price}
              </span>
              <button className="rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 transition-colors">
                View Receipt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Messages Tab Component
function MessagesTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-bold text-zinc-100">
          Support & Messages
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Chat directly with concierge and delivery support agents.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 border border-zinc-800/80 p-4 space-y-4 h-64 overflow-y-auto">
        <div className="flex space-x-3">
          <div className="w-8 h-8 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center font-bold text-xs flex-shrink-0">
            S
          </div>
          <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl rounded-tl-none p-3 max-w-md">
            <p className="text-xs text-zinc-200">
              Hello John! Your double patty veg burger order has been
              dispatched.
            </p>
            <span className="text-[10px] text-zinc-500 block mt-1">
              10:42 AM
            </span>
          </div>
        </div>

        <div className="flex space-x-3 justify-end">
          <div className="bg-amber-400/10 border border-amber-400/20 rounded-2xl rounded-tr-none p-3 max-w-md">
            <p className="text-xs text-zinc-200">
              Thanks! Could you please ask the rider to call when outside?
            </p>
            <span className="text-[10px] text-zinc-500 block mt-1 text-right">
              10:44 AM
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 focus:border-amber-400/50 focus:outline-none"
        />
        <button className="rounded-xl bg-amber-400 hover:bg-amber-300 p-2.5 text-zinc-950 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// 4. Settings Tab Component
function SettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-bold text-zinc-100">
          Preferences & Security
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Manage platform notifications and account authentication settings.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-sm font-medium text-zinc-200">Order Updates</p>
              <p className="text-xs text-zinc-400">
                Receive real-time push notifications for active orders.
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            defaultChecked
            className="accent-amber-400 h-4 w-4 rounded"
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-sm font-medium text-zinc-200">
                Two-Factor Authentication
              </p>
              <p className="text-xs text-zinc-400">
                Add an extra layer of security to your account.
              </p>
            </div>
          </div>
          <button className="rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-400/40 px-3 py-1.5 text-xs text-amber-400 font-medium transition-colors">
            Enable
          </button>
        </div>
      </div>
    </div>
  );
}
